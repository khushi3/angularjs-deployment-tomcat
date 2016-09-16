'use strict';

/**
 * @ngdoc function
 * @name loginApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the loginApp
 */
angular.module('loginApp')
  .controller('UserCtrl', function ($scope, $route, $routeParams, $location) {
   $scope.logoutUser = function() {
        $location.path("/login");
    }
});