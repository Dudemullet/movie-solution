(function(){
  var movies = [];


  var displayMovies = function(data) {
    var movies = data.results;
    movies.forEach(function(v){
      console.log(v);
    });
  }

  API.getLatestMovies(displayMovies);

})()
