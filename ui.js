(function(){
  var recentMoviesTemplate = Handlebars.compile($("#movies-table-template").html());
  var $tableBody = $("table").find("tbody");
  var movies = [];

  var addIndexes = function(value, index) {
      value["index"] = index;
      return value;
  }

  var normalizeData = function(data) {
    movies = data.results;
    movies = movies.map(addIndexes);
  }

  var displayMovies = function(movies) {
    var moviesHTML = recentMoviesTemplate({movie: movies});
    $tableBody.append(moviesHTML);
  }

  var sortCallback = function(e){
    var sortField = $(this).data("sort");
    var sortedMovies = sortBy(sortField, movies);

    $tableBody.empty();
    displayMovies(sortedMovies);
  }

  $("#recent-movies").on("click", "th", sortCallback);

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

  API.getLatestMovies(function(data){
    normalizeData(data);
    displayMovies(movies);
  });

})()
