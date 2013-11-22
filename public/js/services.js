'use strict';

/* Services */

angular.module('ilabApp.services', ['ngResource']).

    factory('People', ['$resource',
      function($resource){
        return $resource('js/people/:person.json', {}, {
        query: {method:'GET', params:{person:'person'}, isArray:true}
      });
  }]);
