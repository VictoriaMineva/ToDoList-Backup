'use strict';

/**
 * @ngdoc service
 * @name toDoListApp.ProjectService
 * @description
 * # ProjectService
 * Factory in the toDoListApp.
 */
angular.module('toDoListApp')
  .factory('ProjectService', function ($resource) {
	return $resource('http://localhost:1337/ToDo/:id', null,
    {
        'update': { method:'PUT' },
        'delete': { method: 'DELETE'}
    });
  });
