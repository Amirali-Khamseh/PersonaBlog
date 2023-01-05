# PersonaBlog
A simple full-stack application which performs CRUD operation using EJS template engines for front-end and Node.js , Express.js and MySQL as a back-end


Prerequisites
Before you begin, make sure you have the following software installed on your computer:

Node.js
MySQL
Installation
To install the dependencies for this application, run the following command from the root directory of the project:

npm install

Setting up the database
Start the MySQL server by running the following command:

mysql.server start

Create a new database by running the following command:

mysql -u root -p

Enter the password for the root user.

Once you are in the MySQL command line, create a new database by running the following command:

CREATE DATABASE full_stack;

Exit the MySQL command line by running the following command:

exit

Running the application
To start the application, run the following command from the root directory of the project:


npm start app.js
The application will be running at http://localhost:3000/.

Built With
Node.js - A JavaScript runtime built on Chrome's V8 JavaScript engine
Express.js - A web application framework for Node.js
MySQL - An open-source relational database management system
