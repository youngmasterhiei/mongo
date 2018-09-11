var db = require("../models");



module.exports = function (app) {
    // Load index page


    app.get("/", function (req, res) {
        db.Article.findAll({}).then(function (articlesdb) {
          res.render("index", {
            msg: "Welcome!",
            examples: articlesdb
          });
        });
      });



};