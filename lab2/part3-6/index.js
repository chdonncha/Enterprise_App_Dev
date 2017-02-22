// var Sequelize = require("sequelize")
var express = require('express')
var app = express();

var Massive=require("massive");
var db = Massive.connectSync({
	connectionString: 'postgres://postgres:pass123@localhost/lab2'
});

var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:pass123@localhost/lab2');

// sequelize.courtroom.saveSync({number: 1});
// var joe = sequelize.courtroom.findSync(1);
// console.log("\n \n save sync user: \n" );
// console.log(joe);

var models = require('./models/index');

app.post('/users', function(req, res) {
  models.User.create({
    email: req.body.email
  }).then(function(user) {
    res.json(user);
  });
});


// 

// app.post('/judges', function(req, res) {
//   models.judges.create({
//     name: req.body.name
//   }).then(function(judges) {
//     res.json(judges);
//   });
// });

// app.post('/courtrooms', function(req, res) {
//   app.Courtrooms.create({
//     number: req.body.number
//   }).then(function(courtroom) {
//     res.json(courtroom);
//   });
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})