var db = require("../models");

module.exports = function(app) {
  // Get comments by candidate number
  app.get("/api/comments/:candidate_number", function(req, res) {
    db.Score.findAll({ where: { candidate_number: req.params.candidate_number }}).then(function(comments) {
      res.json(comments);
      console.log(comments)
    });
  });

  // Create a new example
  app.post("/api/judge", function(req, res) {
    db.Score.create(req.body).then(function(dbScore) {
      res.json(dbScore);
      console.log(dbScore)
    });
  });
}