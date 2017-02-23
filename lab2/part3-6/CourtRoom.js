var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://donncha:pass123@localhost/lab2_2');

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
        // associations can be defined here
      }
    }
  });
  
  sequelize.sync().then(function () {

});
