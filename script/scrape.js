// Parses our HTML and helps us find elements
var cheerio = require("cheerio");
// Makes HTTP request for HTML page
var request = require("request");

var mongoose = require("mongoose");

var db = require("../models");

// First, tell the console what server.js is doing

var scrape = function () {

  // Making a request for reddit's "webdev" board. The page's HTML is passed as the callback's third argument
  request("https://www.foxbusiness.com/category/technology", function (error, response, html) {

    // Load the HTML into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(html);

    // An empty array to save the data that we'll scrape
    var results = [];

    // With cheerio, find each p-tag with the "title" class
    // (i: iterator. element: the current element)
    $("h3").each(function (i, element) {

      // Save the text of the element in a "title" variable
      var title = $(element).text();


      // In the currently selected element, look at its child elements (i.e., its a-tags),
      // then save the values for any "href" attributes that the child elements may have
      var link = $(element).children().attr("href");

      var summary = $("<p data-v-7cf20f0a> </p>").text();

      db.Article.create({
        title: title,
        link: link,
        summary: summary
      }, function (err, ArticleSchema) {
        if (err) return handleError(err);
        // saved!
      });

      // Save these results in an object that we'll push into the results array we defined earlier
      results.push({
        title: title,
        link: link,
        summary: summary
      });

    
    });

    // Log the results once you've looped through each of the elements found with cheerio
    console.log(results);
    console.log(results.length);

  });

};

module.exports = scrape;