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

 // Load candidate registration page
 app.get("/candidateregister", function(req, res){
  res.render("candidateregister")
})

 // Load judges registration page
 app.get("/judgeregister", function(req, res){
  res.render("judgeregister")
})

  // Load comments result page
  app.get("/comments-form", function(req, res){
    db.Score.findAll({}).then(function(dbScore){
      res.render("comments-form")
    })
  })

  // Load comments card page using candidate number
  app.get("/comments/:id", function(req, res) {
    db.Score.findAll({ where: { candidate_number: req.params.id } }).then(function(dbComments) {
      res.render("comments", {
        comments: dbComments,
        empty: req.params.id
      });
    });
  });

  // Load example page using graphs instead of cards
  app.get("/comments-graph/:id", function(req, res) {
    db.Score.findAll({ where: { candidate_number: req.params.id } }).then(function(dbComments) {
      res.render("comments-graph", {
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
