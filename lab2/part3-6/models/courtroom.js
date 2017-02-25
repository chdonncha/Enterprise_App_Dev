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
        this.belongsTo(models.Case, {
	        through: 'part_id'
        });
      }
    }
  });
  return Courtroom;
};
