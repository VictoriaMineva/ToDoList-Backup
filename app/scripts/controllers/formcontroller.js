'use strict';

/**
 * @ngdoc function
 * @name toDoListApp.controller:FormcontrollerCtrl
 * @description
 * # FormcontrollerCtrl
 * Controller of the toDoListApp
 */
angular.module('toDoListApp')
  .controller('FormController', function ($scope, ProjectService, $http) {
    this.newTask = {};

		this.addTask = function(){
			$scope.data.push(this.newTask);
			console.log($scope.data);
			$http.post('http://localhost:1337/ToDo/', this.newTask).
			  success(function(data, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				console.log('added'); 	
			  });
			this.newTask = {};
		};
  });
