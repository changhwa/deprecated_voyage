"use strict";
module.exports = function(sequelize, DataTypes){

  const Test = sequelize.define("Test", {
    code: {
      type: DataTypes.STRING(50),
      primaryKey: true
    },
    test: {
      type: DataTypes.STRING(20)
    }
  }, {
    underscored: true,
    tableName: 'test'
  });

  Test.sync({force:true});
  return Test;
};