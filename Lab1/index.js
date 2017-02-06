var express = require('express')
var app = express();

var Massive=require("massive");
var db = Massive.connectSync({
	connectionString: 'postgres://postgres:pass123@localhost/pgguide'
});

app.get('/users', function (req, res) {
  db.users.find({}, function (err, data) {
    console.log(data)
    res.send(data)
  })
})

app.get('/users/:id', function (req, res) {
  db.users.find({id: req.params.id}, function (err, data) {
      console.log(data)
    res.send(data)
  })
})

app.get('/products', function (req, res) {
  db.products.find({}, function (err, data) {
    console.log(data)
    res.send(data)
  })
})

app.get('/products/:id', function (req, res) {
  db.products.find({id: req.params.id}, function (err, data) {
      console.log(data)
    res.send(data)
  })
})

app.get('/purchases', function (req, res) {
  db.users.find({}, function (err, data) {
    console.log(data)
    res.send(data)
  })
})

app.get('/purchases/:id', function (req, res) {
  db.purchases.find({id: req.params.id}, function (err, data) {
      console.log(data)
    res.send(data)
  })
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})