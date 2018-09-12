
$(document).ready(function () {




    var API = {
        getArticles: function () {
            return $.ajax({
              url: "api/articles",
              type: "GET"
            });
          }

    };


    var displayArticles = function () {
        API.getArticles().then(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                      $("#articles").append("<h1 class='title' data-id='" + data[i]._id + "'>" + data[i].title + "</h1><p class='summary'>" + data[i].summary + "</p> <a href='" + data[i].link +  "'target='blank' >'" + data[i].title + "</a>");
                    }
        }); 
        
    };
// $.getJSON("/articles", function (data) {
//     // For each one
//     for (var i = 0; i < data.length; i++) {
//       // Display the apropos information on the page
//       $("#articles").append("<h1 class='title' data-id='" + data[i]._id + "'>" + data[i].title + "</h1><p class='summary'>" + data[i].summary + "</p> <a href='" + data[i].link + "'>" + data[i].title + "</a>");
//     }
//   });



displayArticles();

});