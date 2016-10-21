var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World!');
});

app.get('/home', function(req, res){
  res.send('I am not at home now!');
});

app.listen(8080, function(){
  console.log("Hello, I'm here!");
});
