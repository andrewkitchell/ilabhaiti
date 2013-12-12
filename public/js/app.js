var ilabApp = angular.module('ilabApp', [
  'ilabApp.controllers',
  'ilabApp.directives',
  'ilabApp.services',
  'ngSanitize'
  ]);

ilabApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home',
      controller: 'HomeCtrl'
    }).
    when('/who-we-are', {
      templateUrl: 'partials/who-we-are',
      controller: 'WhoCtrl'
    }).
    when('/who-we-are/:person', {
        templateUrl: 'partials/who-details',
        controller: 'WhoCtrl'
      }).
    when('/what-we-do', {
      templateUrl: 'partials/what-we-do',
      controller: 'WhatCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
}]);