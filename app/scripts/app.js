'use strict';

/**
 * @ngdoc overview
 * @name loginApp
 * @description
 * # loginApp
 *
 * Main module of the application.
 */
var app = angular
  .module('loginApp', [
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      
      .otherwise({
        redirectTo: '/'
      });
  });
  app.factory("User", function($resource) {
    return $resource("resource/:userId.json", {}, {
        query: {method: "GET", params: {userId: "users"}, isArray: true}
    });
});

//  var app = angular.module('loginApp', ["ngResource"])

// .config(['$routeProvider', function($routeProvider) {
//     $routeProvider.
//         when('/', {
//         templateUrl: 'views/main.html',
//         controller: 'MainCtrl',
//         controllerAs: 'main'
//       })
      
//       when('/login', {
//         templateUrl: 'views/login.html',
//         controller: 'LoginCtrl',
//         controllerAs: 'login'
//       })
//       when('/loggedin', {templateUrl: 'partials/user-admin.html', controller: UserCtrl}).
//       otherwise({redirectTo: '/login'});
// }],[ '$locationProvider', function($locationProvider) {
//     $locationProvider.html5Mode = true;
// }])

// app.factory("User", function($resource) {
//     return $resource("users/:userId.json", {}, {
//         query: {method: "GET", params: {userId: "users"}, isArray: true}
//     });
// });
