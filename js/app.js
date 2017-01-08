// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['ngCountTo']);


myApp.controller('demoController', function ($scope) {

    $scope.countTo = 1860;
    $scope.countFrom = 0;
    $scope.filter = 'number';

    $scope.reCount = function () {
        $scope.countFrom = Math.ceil(Math.random() * 300);
        $scope.countTo = Math.ceil(Math.random() * 7000) - Math.ceil(Math.random() * 600);
    };

});
