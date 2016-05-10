var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'))

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(process.env.PORT || 3000);
