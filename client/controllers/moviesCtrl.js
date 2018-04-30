
angular.module("MovieWatchlist").controller("MoviesCtrl", function($scope, moviesFactory){
  $scope.chups = "mugs chups";
  moviesFactory.getMovies()
  .then(data=>{
    console.log('movies: ',data.data.results);
    $scope.allMovies = data.data.results;
  })
});