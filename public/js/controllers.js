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

  controller('WhoCtrl', ['$scope', '$routeParams', '$sanitize', 'People',
    function($scope, $routeParams, $sanitize, People) {
    $scope.person = People.get({person: $routeParams.person}, function(person) {
      $scope.name = person.name;
      $scope.bio = person.bio;
      $scope.image_url = person.image_url;
    });

  }]).

  controller('JoinCtrl', function($scope) {

      $scope.name = "Join";
  });

