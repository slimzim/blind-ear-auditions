module.exports = function(sequelize, DataTypes) {
  var Score = sequelize.define("Score", {
    judge_number: DataTypes.INTEGER,
    candidate_number: DataTypes.INTEGER,
    comments: DataTypes.STRING(9999),
    intonation: DataTypes.INTEGER,
    rhythm: DataTypes.INTEGER,
    tone: DataTypes.INTEGER,
    musicality: DataTypes.INTEGER,
    vote: DataTypes.BOOLEAN
  });
  return Score;
};
  