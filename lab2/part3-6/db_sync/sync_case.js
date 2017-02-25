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
        this.belongsTo(models.Judge, {
            through: 'judge_id'
        });
         this.belongsTo(models.Courtroom, {
            through: 'courtroom_id'
        });
         this.belongsTo(models.Participant, {
            through: 'claimant_id'
        });
         this.belongsTo(models.Participant, {
            through: 'respondent_id'
        });
      }
    }
  });

// Create database
sequelize
  .sync()
  .then(function(){
    // do some work
  });