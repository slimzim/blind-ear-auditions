module.exports = function(sequelize, DataTypes) {
    var Candidate = sequelize.define("Candidate", {
      first_name: DataTypes.STRING(55),
      last_name: DataTypes.STRING(55),
      instrument: DataTypes.STRING(55),
      email: DataTypes.STRING(55),
      password: DataTypes.STRING(55),
      phone: DataTypes.STRING(55)
    });
    return Candidate;
  };