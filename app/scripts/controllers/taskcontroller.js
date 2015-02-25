'use strict';

/**
 * @ngdoc function
 * @name toDoListApp.controller:TaskcontrollerCtrl
 * @description
 * # TaskcontrollerCtrl
 * Controller of the toDoListApp
 */
angular.module('toDoListApp')
  .controller('TaskController', function ($scope, ProjectService) {

    $scope.data = ProjectService.query();
	
	$scope.edit = function(id, arg) {
		ProjectService.save({id: id}, arg);
	};
	
	$scope.isDone = function(id, arg) {
		ProjectService.update({id: id}, arg);
	};
			
	$scope.removeTask = function(id, arg) {
		ProjectService.remove({id: id}); 
	};
  });
