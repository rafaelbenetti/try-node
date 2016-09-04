(function(){
  'use strict';

  var server = io.connect('http://localhost:8080');

  server.on('connect', function(data) {
    $('#messages').html('Connected to chat');
    var nickname = prompt('What is yout nickname?');
    server.emit('join', nickname);
  });

  $('form').submit(function(e) {
    var message = $('#text').val();
    socket.emit('messages', message);
    $('#messages').append($('<li>').text(msg));
  });
})();
