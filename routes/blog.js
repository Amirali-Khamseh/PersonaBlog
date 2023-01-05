const express = require('express');
const { query } = require('../data/database');
const db  = require('../data/database')
const router  = express.Router();

router.get('/',function(req,res){
   res.redirect('/posts');
});
router.get('/posts',async function(req,res){
    let [data] = await db.query('SELECT * FROM posts INNER JOIN authors on posts.author_id = authors.id');
    res.render('posts-list',{posts:data})
});

router.get('/new-post',async function(req,res){
   const [authors] = await db.query('SELECT * FROM authors');
    res.render('create-post',{authors:authors});
});

router.post('/posts',async function(req,res){
    let  data = [
        req.body.title,
        req.body.summary,
        req.body.content,
        req.body.author
    ]; 
  await db.query('INSERT INTO posts (title,summary,body,author_id) VALUES (?)',[data]);
  res.redirect('/posts')
});

router.get('/posts/:id',async function(req,res){
    let query = 
    `SELECT * FROM blog.posts
    INNER JOIN blog.authors ON (posts.author_id = authors.id)
    WHERE posts.id = ?
    `;
    
    
    let [post] =  await db.query(query ,[req.params.id])
    if(!post || post.length === 0){
        res.render('404')
    }
    res.render('post-detail',{post:post[0]})
});


router.get('/posts/:id/edit',async function(req,res){
    let query = 
    `SELECT * FROM blog.posts
    INNER JOIN blog.authors ON (posts.author_id = authors.id)
    WHERE posts.id = ?
    `;
    
    let [post] =  await db.query(query ,[req.params.id])
    if(!post || post.length === 0){
        res.render('404')
    }
    res.render('update-post',{post:post[0]})
});

router.post('/posts/:id/edit',async function(req,res){
    const query = `
    UPDATE posts 
    SET 
    title = ?,
    summary=?,
    body=?
    WHERE 
    id = ?
  `;
   await db.query(query,[req.body.title,req.body.summary,req.body.content,req.params.id]);
   res.redirect('/posts');
});

router.post('/posts/:id/del',async function(req,res){
  await db.query('DELETE FROM blog.posts WHERE id = ?',[req.params.id]);
  res.redirect('/posts');
});

module.exports = router;