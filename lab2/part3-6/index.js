var express = require('express')
var app = express();

var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:pass123@localhost/lab2_4');

const models = require("./models");


//---------------------------------------------------------------
// Populate or Drop Tables
//---------------------------------------------------------------


// Courtroom
//------------

models.sequelize.sync()
	.then(() => models.Courtroom.destroy({
		where: {}
  }))

// Populate model
models.sequelize.sync()
	.then(() => models.Courtroom.bulkCreate([
		{number: 1},
		{number: 2},
		{number: 3},
		{number: 4}
	]))

// Find all rows
app.get('/courtroom', function(req, res) {
  models.Courtroom.findAll({}).then(function(courtroom) {
    res.json(courtroom);
  });
});


// Judge
//-------

models.sequelize.sync()
	.then(() => models.Judge.destroy({
		where: {}
  }))

// Populate model
models.sequelize.sync()
	.then(() => models.Judge.bulkCreate([
		{name: 'John Doe', room: 20, ext: 'test'},
		{name: 'Bredan Byrne', room: 11, ext: 'test'},
		{name: 'Ray Khoe', room: 9, ext: 'test'},
		{name: 'Amanda Darcey', room: 36, ext: 'test'}
	]))

// Find all rows
app.get('/judge', function(req, res) {
  models.Judge.findAll({}).then(function(judge) {
    res.json(judge);
  });
});


// Participant
//-------------

models.sequelize.sync()
	.then(() => models.Participant.destroy({
		where: {}
  }))

// Populate model
models.sequelize.sync()
	.then(() => models.Participant.bulkCreate([
		{name: 'Breda Sullivan', address: '11 Deliford Heights', type: 'Jury'},
		{name: 'James Connell', room: '207 Wayne Avenue', type: 'Clerk'},
		{name: 'Richard Gilford', room: '36 Stilorgan Way', type: 'Clerk'},
		{name: 'Maria Nocton', room: '57 Garfield Mews', type: 'Jury'}
	]))

// Find all rows
app.get('/participant', function(req, res) {
  models.Participant.findAll({}).then(function(participant) {
    res.json(participant);
  });
});


// Case
//-------------

models.sequelize.sync()
	.then(() => models.Case.destroy({
		where: {}
  }))

// Populate model
models.sequelize.sync()
	.then(() => models.Case.bulkCreate([
		{judge_id: 2, courtroom_id: 2, claimant_id: 7, respondent_id: 3, start_date: '2015-11-05' , duration: 24, result: true },
		{judge_id: 2, courtroom_id: 5, claimant_id: 5, respondent_id: 5, start_date: '2014-11-05' , duration: 24, result: true },
		{judge_id: 5, courtroom_id: 5, claimant_id: 9, respondent_id: 7, start_date: '2012-11-05' , duration: 24, result: true },
		{judge_id: 3, courtroom_id: 3, claimant_id: 2, respondent_id: 2, start_date: '2015-11-05' , duration: 24, result: true },
	]))

// Find all rows
app.get('/case', function(req, res) {
  models.Case.findAll({}).then(function(court_case) {
    res.json(court_case);
  });
});


//---------------------------------------------------------------
// Routing
//---------------------------------------------------------------

// Courtroom
//-----------

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


// Judge
//--------


app.post('/judge/post/:number', function(req, res) {
  models.Judge.findAll({
    number: 6,
  }).then(function(judge) {
    res.json(judge);
  });
});

// get single todo
app.get('/judge/:id', function(req, res) {
  models.Judge.find({
    where: {
      id: req.params.id
    }
  }).then(function(judge) {
    res.json(judge);
  });
});


// delete a single todo
app.delete('/judge/delete/:id', function(req, res) {
  models.Judge.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(judge) {
    res.json(judge);
  });
});


// update single todo
app.put('/judge/put/:id', function(req, res) {
  models.Judge.find({
    where: {
      id: req.params.id
    }
  }).then(function(judge) {
    if(judge){
      judge.updateAttributes({
        number: req.body.number
      }).then(function(judge) {
        res.send(judge);
      });
    }
  });
});


// Participant
//-------------


app.post('/participant/post/:number', function(req, res) {
  models.Participant.findAll({
    number: 6,
  }).then(function(participant) {
    res.json(participant);
  });
});

// get single todo
app.get('/participant/:id', function(req, res) {
  models.Participant.find({
    where: {
      id: req.params.id
    }
  }).then(function(participant) {
    res.json(participant);
  });
});


// delete a single todo
app.delete('/participant/delete/:id', function(req, res) {
  models.Participant.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(participant) {
    res.json(participant);
  });
});


// update single todo
app.put('/participant/put/:id', function(req, res) {
  models.Participant.find({
    where: {
      id: req.params.id
    }
  }).then(function(participant) {
    if(participant){
      participant.updateAttributes({
        number: req.body.number
      }).then(function(participant) {
        res.send(participant);
      });
    }
  });
});


// Case
//-------------


app.post('/case/post/:number', function(req, res) {
  models.Case.findAll({
    number: 6,
  }).then(function(court_case) {
    res.json(court_case);
  });
});

// get single todo
app.get('/case/:id', function(req, res) {
  models.Case.find({
    where: {
      id: req.params.id
    }
  }).then(function(court_case) {
    res.json(court_case);
  });
});


// delete a single todo
app.delete('/case/delete/:id', function(req, res) {
  models.Case.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(court_case) {
    res.json(court_case);
  });
});


// update single todo
app.put('/case/put/:id', function(req, res) {
  models.Case.find({
    where: {
      id: req.params.id
    }
  }).then(function(court_case) {
    if(court_case){
      court_case.updateAttributes({
        number: req.body.number
      }).then(function(court_case) {
        res.send(court_case);
      });
    }
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
