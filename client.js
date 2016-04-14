var app = angular.module('myApp', []);

app.controller('randomController', ['$scope', '$http', function($scope, $http){
var nouns = [];
var adjs = [];
var nounArray = [];
var adjArray = [];

  $http.get('/get/noun').then(function(response){
    if(response.status !== 200) {
      console.log("FAILed to get nouns");
    }
    nouns = response.data;
    nounArray = nouns[0].words;

    $http.get('/get/adj').then(function(response){
      if(response.status !== 200) {
        console.log("FAILed to get adjs");
      }
      adjs = response.data;
      adjArray = adjs[0].words;
      var handles = [];

      var randomNoun = "";
      var randomAdj = "";
      var randomNum = 0;

      for(var i=0; i<10; i++){
        randomNoun = nounArray[Math.floor(Math.random() * nounArray.length)];
        randomAdj = adjArray[Math.floor(Math.random() * adjArray.length)];
        randomNum = Math.floor(Math.random() * 100);
        handles.push(randomAdj + '_' + randomNoun + '_' + randomNum.toString());
      }

      $scope.randomHandles = handles;
    });
  });


}]);
