var mongoose = require("mongoose");
var Schema = mongoose.Schema;




var ArticleSchema = mongoose.Schema({
    title: String,
    link: String,
    summary: String
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;