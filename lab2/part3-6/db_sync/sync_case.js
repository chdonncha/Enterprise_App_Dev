var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://donncha:pass123@localhost:5433/lab2_4');

  var Case = sequelize.define('Case', {
    judge_id: Sequelize.INTEGER,
    courtroom_id: Sequelize.INTEGER,
    claimant_id: Sequelize.INTEGER,
    respondent_id: Sequelize.INTEGER,
    start_date: Sequelize.DATE,
    duration: Sequelize.INTEGER,
    result: Sequelize.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

// Create database
sequelize
  .sync()
  .then(function(){
    // do some work
  });