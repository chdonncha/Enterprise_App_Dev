var Sequelize = require('sequelize');

'use strict';
module.exports = function(sequelize, DataTypes) {
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
        // do stuff
      }
    }
  });
  return Courtroom;
};
