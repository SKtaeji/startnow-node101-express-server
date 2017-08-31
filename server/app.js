// import files and packages up here
var morgan = require('morgan');
var data = require('./data.json');
var path = require('path');
// create your express server below
var express = require('express');
var app = express();


// add your routes and middleware below
app.use(morgan('dev'));

app.get('/data', function(req, res){
    res.json(data);
});

app.get('/', function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end();
});
// finally export the express application
module.exports = app;
