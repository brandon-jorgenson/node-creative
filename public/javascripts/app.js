var app = window.angular.module('app', [])

app.factory('catFetcher', catFetcher)
app.controller('mainCtrl', mainCtrl)
app.controller('battleCtrl', battleCtrl)

function catFetcher($http) {

  var API_ROOT = 'cat'
  return {
    get: function() {
      return $http
        .get(API_ROOT)
        .then(function(resp) {
          return resp.data
        })
    }
  }

}

function mainCtrl($scope, catFetcher, $http) {

  $scope.cat = []

  catFetcher.get()
    .then(function(data) {
      $scope.cat = data
    })


}

function battleCtrl($scope, catFetcher, $http) {
    $scope.cat = []

  catFetcher.get()
    .then(function(data) {
      $scope.cat = data
    })

  $scope.doShuffle = function() {
    shuffleArray($scope.cat);
  }

  var shuffleArray = function(array) {
    var m = array.length,
      t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }
  
    $scope.addCatData = function() {
    var formData = $scope.cat;
    console.log(formData);
    var catURL = 'cat';
    $http({
      url: catURL,
      method: "POST",
      data: formData
    }).success(function(data, status, headers, config) {
      console.log("Post worked");
    }).error(function(data, status, headers, config) {
      console.log("Post failed");
    });
  }
}
