'use strict';
module.exports = function(sequelize, DataTypes) {
  var Courtroom = sequelize.define('Courtroom', {
    id: DataTypes.INTEGER,
    number: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Courtroom;
};