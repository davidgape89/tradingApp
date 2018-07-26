var http = require('http');
var socketjs = require('socket.js');

// start an http server
var server = http.createServer();
server.listen(3000, function() {
  console.log('Listening on port 3000.');
});

socketjs(server, function(socket, reconnectData) {
  // if we get disconnected and subsequently reconnect, the client can pass data here
  if (reconnectData === null) {
    console.log('A user connected.');
  } else {
    console.log('A user reconnected with: ' + JSON.stringify(reconnectData) + '.');
  }

  // log messages as they arrive
  socket.receive('greeting', function(message) {
    console.log('Received: ' + JSON.stringify(message));
  });

  // periodically send messages to the client
  var interval = setInterval(function() {
    socket.send('greeting', 'Hello from the server!');
  }, 1000);

  // if the client disconnects, stop sending messages to it
  socket.close(function() {
    console.log('A user disconnected.');

    clearInterval(interval);
  });
});