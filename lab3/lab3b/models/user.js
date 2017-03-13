'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
     username: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    hashed_password: {
      type: DataTypes.STRING,
      required: true
    }
  },
  {
    hooks: {
      beforeCreate(user) {
      return sequelize.query("select crypt(:hashed_password, gen_salt('md5'))", {
        replacements: {
        hashed_password: user.hashed_password
        },
        type: sequelize.QueryTypes.SELECT
        })
      .then((hashed_password) => {
        console.log(hashed_password);
        user.hashed_password = hashed_password[0].crypt;
        //this.setDataValue('hashed_password', hashed_password)
      });
      }
    },
    classMethod: {
      associate: function(models) {
        //test
      }
    }
  });
  return User;
};