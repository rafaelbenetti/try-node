(function(){
  'use strict';

  var socket = io();
  $('#chat_form').submit(function(){
    var message = $('#text').val();
    socket.emit('messages', message);
    $('#text').val('');
    return false;
  });

  socket.on('connect', function(data) {
    $('#status').html('Connected to chattr');
    var nickname = prompt("What is your nickname?");
    socket.emit('join', nickname);
  });

  socket.on('messages', function(msg){
    $('#messages').append($('<li>').append(msg));
  });

})();
