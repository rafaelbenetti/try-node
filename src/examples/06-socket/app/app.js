var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var path = require('path');

io.on('connection', function(socket){
  socket.on('join', function(name) {
    socket.nickname = name;
  });
  socket.on('messages', function(message){
    var nickname = socket.nickname;
    io.emit('messages', nickname + ': ' + message);
  });
});

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.use(express.static('../public'));

server.listen(8080);
