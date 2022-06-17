var mysql = require('mysql');
var dotenv = require('dotenv').config();


var connection = mysql.createConnection({
    host:'localhost',
    user: process.env.USER,
    password:process.env.PASSWORD,
    database: process.env.DBNAME
});

connection.connect(function(error){
    if(!error){
        console.log(error);
    }
    else
    {
        console.log("Connected");
    }
});

module.exports = connection;