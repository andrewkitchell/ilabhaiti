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
  controller('MyCtrl1', function ($scope, $rootScope) {
    // write Ctrl here
    $scope.handleStripe = function(status, response){
        if(response.error) {
          // there was an error. Fix it.
        } else {
          // got stripe token, now charge it or smt
          token = response.id;
        }
      };
    $scope.saveCustomer = function(status, response) {
      $rootScope.user.stripeCustomerId = response.id;
      $rootScope.user.save();
    };

    // $scope.init = function() {
    //   StripeCheckout.configure();
    //   Stripe.setPublishableKey('pk_LzkJmgBXMs1mjt0WBrlEzrowncsB9');
    // };

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
