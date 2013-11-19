angular.module('ilabApp.controllers', []).

  controller('NavCtrl', function($scope, $location, $route) {

    $scope.isActive = function(route) {
        return route === $location.path();
    };

  }).

  controller('HomeCtrl', function($scope) {

    $scope.name = "What";

  }).

  controller('WhatCtrl', function($scope) {

    $scope.name = "What";

  }).

  controller('WhoCtrl', function($scope) {

    $scope.name = "Who";

  }).

  controller('JoinCtrl', function($scope) {

      $scope.name = "Join";
  });

