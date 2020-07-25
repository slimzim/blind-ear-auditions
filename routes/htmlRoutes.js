var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples,
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/proctor-login/", function(req, res) {
    res.render("proctor-login");
  });

  app.get("/proctor-login/proctor/", function(req, res) {
    res.render("proctor");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
