
angular.module("MovieWatchlist").factory("moviesFactory", function($q, $http){
  const getMovies = ()=>{
    return $q((resolve, reject)=>{
      $http.get(`movies?keyword="avengers"`)
      .then(movies=>{
        resolve(movies);
      })
    })
  }

  return {getMovies};
})