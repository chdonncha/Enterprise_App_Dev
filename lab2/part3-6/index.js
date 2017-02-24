var express = require('express')
var app = express();

var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:pass123@localhost/lab2_1');

const models = require("./models");

// Populate model
/*
models.sequelize.sync()
	.then(() => models.Courtroom.destroy({
		where: {}
	}))
	.then(() => models.Courtroom.bulkCreate([
		{number: 1},
		{number: 2},
		{number: 3},
		{number: 4}
	]))
*/

// Delete table
/*
models.sequelize.sync()
	.then(() => models.Courtroom.destroy({
		where: {}
  }))
*/

app.get('/courtroom', function(req, res) {
  models.Courtroom.findAll({}).then(function(courtroom) {
    res.json(courtroom);
  });
});

app.post('/courtroom/post/:number', function(req, res) {
  models.Courtroom.findAll({
    number: 6,
  }).then(function(courtroom) {
    res.json(courtroom);
  });
});

// get single todo
app.get('/courtroom/:id', function(req, res) {
  models.Courtroom.find({
    where: {
      id: req.params.id
    }
  }).then(function(courtroom) {
    res.json(courtroom);
  });
});


// delete a single todo
app.delete('/courtroom/delete/:id', function(req, res) {
  models.Courtroom.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(courtroom) {
    res.json(courtroom);
  });
});


// update single todo
app.put('/courtroom/put/:id', function(req, res) {
  models.Courtroom.find({
    where: {
      id: req.params.id
    }
  }).then(function(courtroom) {
    if(courtroom){
      courtroom.updateAttributes({
        number: req.body.number
      }).then(function(courtroom) {
        res.send(courtroom);
      });
    }
  });
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
