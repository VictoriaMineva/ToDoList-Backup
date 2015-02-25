'use strict';

/**
 * @ngdoc overview
 * @name toDoListApp
 * @description
 * # toDoListApp
 *
 * Main module of the application.
 */
angular
  .module('toDoListApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/overview.html',
        controller: 'TaskController'
      })
      .when('/todo', {
        templateUrl: 'views/todo.html',
        controller: 'TaskController'
      })
      .when('/done', {
        templateUrl: 'views/done.html',
        controller: 'TaskController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
