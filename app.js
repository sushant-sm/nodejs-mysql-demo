var express = require('express');
var app = express();


var expressValidator = require('express-validator');
// app.use(expressValidator());

var bodyParser = require('body-parser');
var mysql = require('mysql');

app.use(bodyParser.json());
 
app.use(bodyParser.urlencoded({
extended: true
}));

const indexRoutes = require("./routes/index");
const { connect } = require('./routes/index');

app.use("/", indexRoutes);



app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
module.exports = app;