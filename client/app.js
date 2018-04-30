
angular.module("MovieWatchlist", ["ngRoute"])
.config($routeProvider=>{
  $routeProvider
  .when("/test", {
    templateUrl: "partials/test.html",
    controller: "TestCtrl"
  })
  .when("/movies", {
    templateUrl: "partials/movies.html",
    controller: "MoviesCtrl"
  });
});
