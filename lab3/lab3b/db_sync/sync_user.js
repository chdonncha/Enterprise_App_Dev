var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://donncha:pass123@localhost:5433/lab2_4');

  var User = sequelize.define('User', {
    username: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    hashed_password: {
        type: Sequelize.STRING,
        required: true
    },
    accessKey: {
      type: Sequelize.CHAR(160)
    },
    secretKey: {
      type: Sequelize.CHAR(320)
    }
  }
);

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
