angular.module('ilabApp.directives', []).

  directive('dirTest', function () {
    return {
      restrict: 'E',
      template: '<div>I\'m a directive</div>'
    };
  }).

  directive('navlist', function () {
    return {
      restrict: 'E',
      templateUrl: '/partials/navlist.jade',
      replace: true,
      transclude: true
    };
  })

