'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
     username: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    hashed_password: {
      type: DataTypes.STRING,
      required: true,
      set(val) {
        sequelize.query("select crypt(:hashed_password, gen_salt('md5'))", {
          replacements: {
          hashed_password: val
          },
        type: Sequelize.QueryTypes.SELECT
        })
        .then((hashed_password) => {
          this.setDataValue('hashed_password', hashed_password)
        });
      }
    }
  });
  return User;
};