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

app.get('/products/:id', function (req, res) {
  db.products.find({id: req.params.id}, function (err, data) {
      console.log(data)
    res.send(data)
  });
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

//Basic Hackable version

/*
app.get('/products', function (req, res) {
  db.run(`select * from products where title='${req.query.name}'`, function(err, data){
    res.send(data);
  })
})
*/

//Parametertised version

/*
app.get('/products', function (req, res) {
  db.run(`select * from products where title=$1`, [req.query.name], function(err, data){
    res.send(data);
  })
})
*/

app.get('/products', function (req, res) {
  db.test_procedure(req.query.name, function(err, data){
    res.send(data);
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})