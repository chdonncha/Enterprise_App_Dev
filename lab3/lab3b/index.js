var express = require('express')
var app = express();

//var Sequelize = require('sequelize');
//var sequelize = new Sequelize('postgres://postgres:pass123@localhost/lab2_4');

const models = require("./models");
const jwt = require('jsonwebtoken');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));


//---------------------------------------------------------------
// Populate or Drop Tables
//---------------------------------------------------------------


// Courtroom
//------------

// models.sequelize.sync()
// 	.then(() => models.Courtroom.destroy({
// 		where: {}
//   }))

// Populate model
// models.sequelize.sync()
// 	.then(() => models.Courtroom.bulkCreate([
// 		{number: 1},
// 		{number: 2},
// 		{number: 3},
// 		{number: 4}
// 	]))


// Judge
//-------

// models.sequelize.sync()
// 	.then(() => models.Judge.destroy({
// 		where: {}
//   }))

// // Populate model
// models.sequelize.sync()
// 	.then(() => models.Judge.bulkCreate([
// 		{name: 'John Doe', room: 21, ext: 'test'},
// 		{name: 'Bredan Byrne', room: 22, ext: 'test'},
// 		{name: 'Ray Khoe', room: 24, ext: 'test'},
// 		{name: 'Amanda Darcey', room: 23, ext: 'test'}
// 	]))


// // Participant
// //-------------

// models.sequelize.sync()
// 	.then(() => models.Participant.destroy({
// 		where: {}
//   }))

// // Populate model
// models.sequelize.sync()
// 	.then(() => models.Participant.bulkCreate([
// 		{name: 'Breda Sullivan', address: '11 Deliford Heights', type: 'Jury'},
// 		{name: 'James Connell', room: '207 Wayne Avenue', type: 'Clerk'},
// 		{name: 'Richard Gilford', room: '36 Stilorgan Way', type: 'Clerk'},
// 		{name: 'Maria Nocton', room: '57 Garfield Mews', type: 'Jury'}
// 	]))


// // Case
// //-------------

// models.sequelize.sync()
// 	.then(() => models.Case.destroy({
// 		where: {}
//   }))

// models.sequelize.sync()
// 	.then(() => models.Case.bulkCreate([
// 		{judge_id: 2, courtroom_id: 22, claimant_id: 25, respondent_id: 26, start_date: '2015-11-05' , duration: 24, result: true },
// 		{judge_id: 2, courtroom_id: 24, claimant_id: 27, respondent_id: 28, start_date: '2014-11-05' , duration: 24, result: true },
// 	]))

// User
// ------------

// models.sequelize.sync()
// 	.then(() => models.User.destroy({
// 		where: {}
//   }))

// Populate model
// models.sequelize.sync()
// 	.then(() => models.User.bulkCreate([
// 		{username: "donncha", hashed_password: "password"},
//     {username: "tester", hashed_password: "test"},
// 	]))

//---------------------------------------------------------------
// Authentication
//---------------------------------------------------------------

app.post('/authentication', function(req, res) {
  models.User.find({where: {
    username: req.body.username,
    hashed_password: models.sequelize.fn('crypt',
          req.body.hashed_password,
          models.sequelize.col('hashed_password')
    )
  }})
  .then(function(result) {
    if(result) {
      let result = {
        valid: true,
        token: jwt.sign(tokenData, privateKey)
      }
      return res.json(result);
    }
    return res.json({
      valid: false,
      message: "failed to authenticate user"
    })
  })
})


//---------------------------------------------------------------
// Routing
//---------------------------------------------------------------

// Courtroom
//-----------

// get all rows
app.get('/courtroom', function(req, res) {
  models.Courtroom.findAll({}).then(function(courtroom) {
    res.json(courtroom);
  });
});

// post new courtroom
app.post('/courtroom', function(req, res) {
  models.Courtroom.create({
    number : req.body.number
  }).then(function(courtroom) {
    res.json(courtroom);
  });
});

// get single courtroom
app.get('/courtroom/:id', function(req, res) {
  models.Courtroom.find({
    where: {
      id: req.params.id
    }
  }).then(function(courtroom) {
    res.json(courtroom);
  });
});


// delete a single courtroom
app.delete('/courtroom/:id', function(req, res) {
  models.Courtroom.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(courtroom) {
    res.json(courtroom);
  });
});


// update single courtroom
app.put('/courtroom/:id', function(req, res) {
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


// Judge
//--------

// get all rows
app.get('/judge', function(req, res) {
  models.Judge.findAll({}).then(function(judge) {
    res.json(judge);
  });
});

// post new judge
app.post('/judge', function(req, res) {
  models.Judge.create({
    name: req.body.name,
    room: req.body.room,
    ext: req.body.ext
  }).then(function(judge) {
    res.json(judge);
  });
});


// get single judge
app.get('/judge/:id', function(req, res) {
  models.Judge.find({
    where: {
      id: req.params.id
    }
  }).then(function(judge) {
    res.json(judge);
  });
});


// delete a single judge
app.delete('/judge/:id', function(req, res) {
  models.Judge.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(judge) {
    res.json(judge);
  });
});


// update single judge
app.put('/judge/:id', function(req, res) {
  models.Judge.find({
    where: {
      id: req.params.id
    }
  }).then(function(judge) {
    if(judge){
      judge.updateAttributes({
        name: req.body.name,
        room: req.body.room,
        ext: req.body.ext
      }).then(function(judge) {
        res.send(judge);
      });
    }
  });
});


// Participant
//-------------

// get all rows
app.get('/participant', function(req, res) {
  models.Participant.findAll({}).then(function(participant) {
    res.json(participant);
  });
});

// post new participant
app.post('/participant', function(req, res) {
  models.Participant.create({
    name: req.body.name,
    address: req.body.address,
    type: req.body.type
  }).then(function(participant) {
    res.json(participant);
  });
});

// get single participant
app.get('/participant/:id', function(req, res) {
  models.Participant.find({
    where: {
      id: req.params.id
    }
  }).then(function(participant) {
    res.json(participant);
  });
});


// delete a single participant
app.delete('/participant/:id', function(req, res) {
  models.Participant.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(participant) {
    res.json(participant);
  });
});


// update single participant
app.put('/participant/:id', function(req, res) {
  models.Participant.find({
    where: {
      id: req.params.id
    }
  }).then(function(participant) {
    if(participant){
      participant.updateAttributes({
        name: req.body.name,
        address: req.body.address,
        type: req.body.type
      }).then(function(participant) {
        res.send(participant);
      });
    }
  });
});


// Case
//-------------

// get all rows
app.get('/case', function(req, res) {
  models.Case.findAll({}).then(function(court_case) {
    res.json(court_case);
  });
});

// post new case
app.post('/case', function(req, res) {
  models.Case.create({
    judge_id: req.body.judge_id,
    courtroom_id: req.body.courtroom_id,
    claimant_id: req.body.claimant_id,
    respondent_id: req.body.respondent_id,
    start_date: req.body.start_date,
    duration: req.body.duration,
    result: req.body.result
  }).then(function(court_case) {
    res.json(court_case);
  });
});

// get single case
app.get('/case/:id', function(req, res) {
  models.Case.find({
    where: {
      id: req.params.id
    }
  }).then(function(court_case) {
    res.json(court_case);
  });
});


// delete a single case
app.delete('/case/:id', function(req, res) {
  models.Case.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(court_case) {
    res.json(court_case);
  });
});


// update single case
app.put('/case/:id', function(req, res) {
  models.Case.find({
    where: {
      id: req.params.id
    }
  }).then(function(court_case) {
    if(court_case){
      court_case.updateAttributes({
        judge_id: req.body.judge_id,
        courtroom_id: req.body.courtroom_id,
        claimant_id: req.body.claimant_id,
        respondent_id: req.body.respondent_id,
        start_date: req.body.start_date,
        duration: req.body.duration,
        result: req.body.result
      }).then(function(court_case) {
        res.send(court_case);
      });
    }
  });
});

models.sequelize.sync()
	.then(() => app.listen(3000, function () {
		console.log('Example app listening on port 3000!')
	}));

// models.sequelize.sync()
// 	.then(() => models.User.create(
// 		{username: "donncha", hashed_password: "password"}
// 	))

  models.sequelize.sync()
	.then(() => models.User.bulkCreate([
		{username: "JohnDoe", hashed_password: "123"},
    {username: "Mr_Bean", hashed_password: "qwerty"},
    {username: "GooSanders", hashed_password: "567"}
	]))
