$.getJSON("/articles", function (data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      $("#articles").append("<h1 class='title' data-id='" + data[i]._id + "'>" + data[i].title + "</h1><p class='summary'>" + data[i].summary + "</p> <a href='" + data[i].link + "'>" + data[i].title + "</a>");
    }
  });