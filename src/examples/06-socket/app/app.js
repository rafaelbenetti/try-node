var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var path = require('path');

io.on('connection', function(client) {
  console.log('Server connected!');
  client.on('join', function(name) {
    client.nickname = name;
  });
  client.on('messages', function(data) {
    var nickname = client.nickname;
    client.broadcast.emit('message', nickname + ": " + message);
    client.emit('messages', nickname + ": ", message)
  });
});

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

// Server static
app.use(express.static('../public'));

server.listen(8080);
