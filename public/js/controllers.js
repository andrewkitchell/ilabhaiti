'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });
  }).

  controller('LandingCtrl', function ($scope) {
    $scope.name = 'Landing';

    $scope.demoGuide = function() {
      alert('heyo');
    };

  }).

  controller('FreeCtrl', function ($scope) {
    $scope.name = 'Free';

    $scope.cleanSlate = function() {
      alert('cleanSlate');
    };

  }).

  controller('StoreCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/guides'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
      $scope.guides = data.guides;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

    $scope.addToCart = function() {
      alert('Add to Cart');
    };
  }).

  controller('AboutCtrl', function ($scope) {
    $scope.name = 'About';
  }).
  controller('BlogCtrl', function ($scope) {
    $scope.name = 'Blog';
  }).
  controller('DemoCtrl', function ($scope) {
    $scope.name = 'Demo';
  }).
  controller('StudentCtrl', function ($scope) {

  });
