'use strict';

/**
 * @ngdoc function
 * @name abbsbucketApp.controller:Assignment5Ctrl
 * @description
 * # Assignment5Ctrl
 * Controller of the abbsbucketApp
 */

angular.module('abbsbucketApp')
  .controller('Assignment5Ctrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.getCities = function(){
      var data = {cities: $scope.ciudades.split(",")};
      $http.put("https://lb2l7b8izj.execute-api.us-east-1.amazonaws.com/dev/abbs-MultipleWeather",data)
        .success(function(data){
          $scope.result = data;
        })
        .error(function(error){
          alert(error);
        });
    };
  });
