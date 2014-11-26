(function(){
  var recentMoviesTemplate = Handlebars.compile($("#movies-table-template").html());
  var $table = $("table");

  var displayMovies = function(data) {
    var movies = data.results;
    var moviesHTML = recentMoviesTemplate({movie: movies});
    $table.find("tbody").append(moviesHTML);
  }

  API.getLatestMovies(displayMovies);

})()
