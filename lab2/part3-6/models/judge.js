'use strict';
module.exports = function(sequelize, DataTypes) {
  var Judge = sequelize.define('Judge', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    room: DataTypes.INTEGER,
    ext: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        this.belongsTo(models.Courtroom, {
          through: 'room'
        });
      }
    }
  });
  return Judge;
};
