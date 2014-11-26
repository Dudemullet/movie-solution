window.API = (function(){
  var key = "***";
  var api = "http://api.themoviedb.org/3";
  var latest = api + "/discover/movie?primary_release_date.gte=2014-09-15";
  var auth = {api_key: key};

  var getLatest = function(callback) {
    $.get(latest, auth, callback);
  }

  return {
    getLatestMovies: getLatest,
    api: api,
    key: key
  }
})()
