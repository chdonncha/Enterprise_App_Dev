var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://donncha:pass123@localhost:5433/lab2_4');

  var Judge = sequelize.define('Judge', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: Sequelize.STRING,
    room: Sequelize.INTEGER,
    ext: Sequelize.STRING
  }, {
    classMethods: {
      associate: function(models) {
        this.belongsTo(models.Courtroom, {
          through: 'room'
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
