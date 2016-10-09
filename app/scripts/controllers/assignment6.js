'use strict';

/**
 * @ngdoc function
 * @name abbsbucketApp.controller:Assignment6Ctrl
 * @description
 * # Assignment6Ctrl
 * Controller of the abbsbucketApp
 */
angular.module('abbsbucketApp')
  .controller('Assignment6Ctrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sendMessage = function(){
      var data = {message: $scope.mensajeria};
      $http.put("https://lb2l7b8izj.execute-api.us-east-1.amazonaws.com/dev/abbsMessengerHTTP",data)
        .success(function(data){
          $scope.message = data;

        })
        .error(function(error){

          alert(error);

        });
    };
  });
