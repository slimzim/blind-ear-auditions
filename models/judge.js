module.exports = function(sequelize, DataTypes) {
  var Judge = sequelize.define("Judge", {
    first_name: DataTypes.STRING(55),
    last_name: DataTypes.STRING(55),
    instrument: DataTypes.STRING(55),
    email: DataTypes.STRING(55),
    password: DataTypes.STRING(55),
    phone: DataTypes.STRING(55)
  });
  return Judge;
};