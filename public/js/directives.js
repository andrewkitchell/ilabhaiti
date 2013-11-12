'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  })
  .directive('stripeForm', ['$window', function($window) {
    return {
		restrict: 'E, A',
        link: function(scope, element, attributes) {
          var form = angular.element(element);
          form.bind('submit', function() {

          var button = form.find('button');
          button.prop('disabled', true);

          $window.Stripe.createToken(form[0], function() {
            var args = arguments;
            scope.$apply(function() {
              scope[attributes.stripeForm].apply(scope, args);
            });
            button.prop('disabled', false);
          });
        });
      }
  };


  }]);

