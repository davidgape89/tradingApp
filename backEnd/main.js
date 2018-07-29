var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var currencies = [
  {"pair":"USD CHF", "buy":0.99143, "sell":0.99043},
  {"pair":"GBP USD", "buy":1.28495, "sell":1.2836},
  {"pair":"GBP CHF", "buy":1.27378, "sell":1.27147},
  {"pair":"EUR SEK", "buy":9.632, "sell":9.6055},
  {"pair":"USD JPY", "buy":110.467, "sell":110.417},
  {"pair":"EUR JPY", "buy":120.589, "sell":120.491}
];

io.on('connection', function(socket){
  socket.emit('message', currencies);

  var interval = setInterval(function() {
      currencies.forEach((currency) => {
        if(parseInt(Math.random()*10, 10)){
          var difference = Math.random() < 0.48 ? -0.1 : 0.1;
          currency.buy = currency.buy + currency.buy * difference;
          currency.sell = currency.sell + currency.sell * difference;
        }
      });
      socket.emit('message', {
        currencies: currencies
      });
  }, 1000);
});

http.listen(3000, function(){
  console.log('listening on localhost:3000');
});
