'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
     username: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    hashed_password: {
      type: DataTypes.STRING,
      set(val) {
        return this.setDataValue('hashed_password',
          sequelize.fn('crypt',
          val,
          sequelize.fn('gen_salt',
            'bf'
          )
        )
      );
    }
  },
  accessKey: {
    type: DataTypes.CHAR(160)
  },
  secretKey: {
    type: DataTypes.CHAR(320)
  }
}, 
{
    classMethod: {
      associate: function(models) {
        //test
      }
    }
  });
  return User;
};
