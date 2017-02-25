var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://donncha:pass123@localhost:5433/lab2_4');

  var Case = sequelize.define('Case', {
    judge_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: 'judges',
        key: 'judge_id'
      }
    },
    courtroom_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: 'courtrooms',
        key: 'court_id'
      }
    },
    claimant_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: 'participants',
        key: 'part_id'
      }
    },
    respondent_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: 'participants',
        key: 'part_id'
      }
    },
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

// drop all tables in the db

// sequelize
//   .sync()
//   .then(function(){
//     // do some work
//   })
//   .then(function(){
//     return sequelize.drop() 
//   });
