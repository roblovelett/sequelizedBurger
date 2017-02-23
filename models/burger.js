'use strict';
var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define('burger', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    burger_name: {
      type: Sequelize.STRING
    },
    devoured: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: false
  });
  return Burger;
};