var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index", {
        msg: "Welcome!",
      });
    });

  // Load judges page
  app.get("/judge", function(req, res){
    res.render("judge")
  })

  // Load comments result page
  app.get("/comments-form", function(req, res){
    db.Score.findAll({}).then(function(dbScore){
      res.render("comments-form")
    })
  })

  // Load example page and pass in an example by id
  app.get("/comments/:id", function(req, res) {
    db.Score.findAll({ where: { candidate_number: req.params.id } }).then(function(dbComments) {
      res.render("comments-card", {
        comments: dbComments,
        empty: req.params.id
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
