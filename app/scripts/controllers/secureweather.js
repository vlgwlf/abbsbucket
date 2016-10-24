'use strict';

/**
 * @ngdoc function
 * @name abbsbucketApp.controller:SecureweatherCtrl
 * @description
 * # SecureweatherCtrl
 * Controller of the abbsbucketApp
 */
angular.module('abbsbucketApp')
  .controller('SecureweatherCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getCities = function(){
      var data = {cities: $scope.ciudades.split(",")};
      $http.put("https://lb2l7b8izj.execute-api.us-east-1.amazonaws.com/dev/weatherSecurity",data)
        .success(function(data){
          $scope.result = data;
        })
        .error(function(error){
          alert(error);
        });
    };

    $scope.login = function(valid){
      var credentials = {
        "username":"foo",
        "password":"tucita"
      };

      credentials.username = valid ? "pepeeltoro" : "foo";
      var url = "https://lb2l7b8izj.execute-api.us-east-1.amazonaws.com/dev/login";
      $http.post(url,credentials)
        .success(function(data){
          localStorage.setItem("token",data.token);
        })
        .error(function(error){
          alert(error);
      });
    };

  });
