// var Sequelize = require("sequelize")
var express = require('express')
var app = express();

var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:pass123@localhost/lab2');

const db = require("./models");

db.sequelize.sync()
	.then(() => db.Courtroom.destroy({
		where: {}
	}))
	.then(() => db.Courtroom.bulkCreate([
		{number: 1},
		{number: 2},
		{number: 3},
		{number: 4}
	]))

app.get('/courtroom', function(req, res) {
  db.Courtroom.findAll({}).then(function(courtroom) {
    res.json(courtroom);
  });
});

app.post('/courtroom_post', function(req, res) {
  db.Courtroom.findAll({
    number: 6,
  }).then(function(courtroom) {
    res.json(courtroom);
  });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
