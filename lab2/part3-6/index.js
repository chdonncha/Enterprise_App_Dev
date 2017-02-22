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

// //establish connection with database
// var db = Massive.connectSync({
// 	connectionString: 'postgres://postgres:pass123@localhost/lab2'
// });

// var newJudge = {
//   name : "john",
// };

// //save new user to database
// var saved = db.judge.saveSync(newJudge);
// console.log("\n \n create new judge: \n");
// console.log(saved);

// //find all details on the newly created user
// db.judges.find({name : "john"}, function(err,res){
//   console.log("\n \n find newly created judge: \n");
//   console.log(res);
// });

// var models = require('./models/index');

// app.post('/judges', function(req, res) {
//   models.judges.create({
//     name: req.body.name
//   }).then(function(judges) {
//     res.json(judges);
//   });
// });

app.post('/courtrooms', function(req, res) {
  app.Courtrooms.create({
    number: req.body.number
  }).then(function(courtroom) {
    res.json(courtroom);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})