var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
text_input = fs.readFileSync('./index.html');

apxsp.get('/', function(request, response) {
  response.send(text_input.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
