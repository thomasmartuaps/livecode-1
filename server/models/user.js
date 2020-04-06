'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {}
  User.init({
    email: {
      type: DataTypes.STRING,
      isEmail: {
        args: true,
        msg: 'Invalid email'
      },
      unique: {
        args: true,
        msg: 'Email already in use.'
      },
      len: {
        args: 7,
        msg: 'Email must be at least 7 chars in length'
      }
    },
    password: {
      type: DataTypes.STRING,
      len: {
        args: 4,
        msg: 'Password must be at least 4 chars in length.'
      }
    }
  }, {
    sequelize
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};