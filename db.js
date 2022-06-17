var mysql = require('mysql');
var dotenv = require('dotenv').config();


var connection = mysql.createConnection({
    host:'localhost',
    user: process.env.user,
    password: process.env.password,
    database: process.env.dbname
});

connection.connect(function(error){
    if(!error){
        console.log("Connected");
    }
    else
    {
        console.log(error);
    }
});

module.exports = connection;