'use strict';

/**
 * @ngdoc function
 * @name loginApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the loginApp
 */
angular.module('loginApp')
  .controller('LoginCtrl', function ($scope, $route, $routeParams, $location, User) {
    $scope.users = User.query();
    $scope.loginUser = function() {
        var loggedin = false;
        var totalUsers = $scope.users.length;
        var usernameTyped = $scope.userUsername;

        for(var i=0; i < totalUsers; i++ ) {
            if( $scope.users[i].name === usernameTyped ) {
                loggedin = true;
                break;
            }
        }

        if( loggedin === true ) {
            alert("login successful");
            $location.path("/loggedin");
        } else {
            alert("username does not exist");
        }
    }
});

