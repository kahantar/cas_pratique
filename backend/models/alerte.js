'use strict';
module.exports = (sequelize, DataTypes) => {
  const alerte = sequelize.define('alerte', {
    category: DataTypes.STRING,
    score: DataTypes.INTEGER,
    date: DataTypes.DATE,
    status: DataTypes.STRING,
    client: DataTypes.STRING,
    summary: DataTypes.STRING
  }, {});
  return alerte;
};