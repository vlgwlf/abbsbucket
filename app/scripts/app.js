'use strict';

/**
 * @ngdoc overview
 * @name abbsbucketApp
 * @description
 * # abbsbucketApp
 *
 * Main module of the application.
 */
angular
  .module('abbsbucketApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/Assignment2', {
        templateUrl: 'views/assignment2.html',
        controller: 'Assignment2Ctrl',
        controllerAs: 'Assignment2'
      })
      .when('/assignment4', {
        templateUrl: 'views/assignment4.html',
        controller: 'Assignment4Ctrl',
        controllerAs: 'assignment4'
      })
      .when('/assignment5', {
        templateUrl: 'views/assignment5.html',
        controller: 'Assignment5Ctrl',
        controllerAs: 'assignment5'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
