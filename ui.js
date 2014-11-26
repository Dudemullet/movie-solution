(function(){
  var recentMoviesTemplate = Handlebars.compile($("#movies-table-template").html());
  var $table = $("table");
  var movies = [];

  var addIndexes = function(value, index) {
      value["index"] = index;
      return value;
  }

  var displayMovies = function(data) {
    movies = data.results;
    movies = movies.map(addIndexes);
    var moviesHTML = recentMoviesTemplate({movie: movies});
    $table.find("tbody").append(moviesHTML);
  }

  $("#recent-movies").on("click", "th", function(e){
    var sortField = $(this).data("sort");
    var sortedMovies = sortBy(sortField, movies);

    // display These
    console.log(sortedMovies);
  });

  var sortBy = function(field, array) {
   return array.sort(function(a,b){
      if (a[field] > b[field]) {
        return 1;
      }
      if (a[field] < b[field]) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }

  API.getLatestMovies(displayMovies);

})()
