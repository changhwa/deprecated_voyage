"use strict";

module.exports = function(sequelize, DataTypes){

  const User = sequelize.define("User", {

    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },

    user_type: {
      type: DataTypes.ENUM,
      values: ['facebook', 'github', 'local'],
      unique: 'compositeIndex',
      allowNull: false
    },

    access_token: {
      type: DataTypes.STRING,
      unique: 'compositeIndex',
      allowNull: false
    },

    login_id: {
      type: DataTypes.STRING,
      allowNull: false
    },

    display_name: {
      type: DataTypes.STRING
    },

    password: {
      type: DataTypes.STRING,
      allowNull: true
    }

  }, {
    underscored: true,
    timestamps: false,
    tableName: 'users'
  });

  // User.sync({force:true});
  return User;
};
