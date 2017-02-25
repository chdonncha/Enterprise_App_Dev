var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://donncha:pass123@localhost:5433/lab2_4');

  var Courtroom = sequelize.define('Courtroom', {
    court_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    number: Sequelize.STRING
  }, {
    classMethods: {
      associate: function(models) {
        this.BelongsTo(models.Case, {
	        through: 'part_id'
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
/*
sequelize
  .sync()
  .then(function(){
    // do some work
  })
  .then(function(){
    return sequelize.drop() 
  });
*/
