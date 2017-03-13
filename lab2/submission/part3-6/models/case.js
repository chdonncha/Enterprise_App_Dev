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

    // check if the room is taken, comparing the duration of start time, to the one
    // being inserted. If the time overlaps with the duration of the same room
    // then it means the case cannot be booked to that room at that time.

      hasAssociation: function(next) {
	var insertData = this;
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
            next('Error no room available');
          }
        }, function() {
          next('No room available');
          });
        });
      checkroom();
      }
    }
  });
  return Case;
};
