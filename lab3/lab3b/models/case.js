'use strict';
module.exports = function(sequelize, DataTypes) {
  var Case = sequelize.define('Case', {
    judge_id: DataTypes.INTEGER,
    courtroom_id: DataTypes.INTEGER,
    claimant_id: DataTypes.INTEGER,
    respondent_id: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    duration: DataTypes.INTEGER,
    result: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
         this.belongsTo(models.Judge, {
            through: 'judge_id'
        });
         this.belongsTo(models.Courtroom, {
            through: 'court_id'
        });
         this.belongsTo(models.Participant, {
            through: 'claimant_id'
        });
         this.belongsTo(models.Participant, {
            through: 'respondent_id'
        });
      }
    }
  },
  {
    validate: {
      hasAssociation: function(next) {
        checkRoom(function(ok) {
          sequelize.models.Case.findAll().then(function(data) {
            for(var i in data) {
              if(i.start_date < insertData.start_date < i.start_date + duration) {
                if(i.room == insertData.room)  {
                ok = false; 
                break;
              }
            }
          }
          if (ok) {
            next();
          } else {
            next('Error');
          }
        }, function() {
          next('No room');
          });
        });
      checkroom();
      }
    }
  });
  return Case;
};