// var Sequelize = require("sequelize")
var express = require('express')
var app = express();

var Massive=require("massive");
var db = Massive.connectSync({
	connectionString: 'postgres://postgres:pass123@localhost/lab2'
});

// var sequelize = new Sequelize('lab2', 'postgres', 'pass123');

// var User = sequelize.define('user', {
//   username: Sequelize.STRING,
//   birthday: Sequelize.DATE
// });

// sequelize.sync().then(function() {
//   return User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   });
// }).then(function(jane) {
//   console.log(jane.get({
//     plain: true
//   }));
// });


var models = require('./models/index');

app.post('/judge', function(req, res) {
  models.Judge.create({
    name: req.body.name
  }).then(function(judge) {
    res.json(judge);
  });
});

app.post('/courtroom', function(req, res) {
  models.Courtroom.create({
    number: req.body.number
  }).then(function(courtroom) {
    res.json(courtroom);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})