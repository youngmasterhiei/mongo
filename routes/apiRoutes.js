var db = require("../models");
var axios = require("axios");



module.exports = function (app) {

    app.get("/api/articles", function(req, res) 
    {
      //get all of them
      db.Article.find({})
        .then(function(articledb) 
        {
          //respond with successful retrieval
          res.json(articledb);
          console.log(articledb + "hello");
        })
        .catch(function(err) 
        {
          //catch to handle error situation
          res.json(err);
      });
    });


};