(function(){
  var recentMoviesTemplate = Handlebars.compile($("#movies-table-template").html());
  var $table = $("table");
  var movies = [];

  var displayMovies = function(data) {
    movies = data.results;
    movies = movies.map(function(v,i){
      v["index"] = i;
      return v;
    });
    var moviesHTML = recentMoviesTemplate({movie: movies});
    $table.find("tbody").append(moviesHTML);
  }

  API.getLatestMovies(displayMovies);

})()
