var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://donncha:pass123@localhost:5433/lab2_4');

  var Judge = sequelize.define('User', {
    username: {
      type: Sequelize.String,
      primaryKey: true
    },
    hashed_password: {
        type: Sequelize.STRING,
        required: true
    }
  }, {
  });


// Create database
sequelize
  .sync()
  .then(function(){

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
