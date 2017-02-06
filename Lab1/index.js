var express = require('express')
var app = express()

var Massive=require("massive");
var db = Massive.connectSync({
	connectionString: 'postgres://postgres:pass123@localhost/pgguide'
});

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})