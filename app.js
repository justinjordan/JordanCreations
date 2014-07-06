var jcApp = angular.module('jcApp', [
    'ngRoute',
    'jcControllers'
]);

jcApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.

        when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        }).

        when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'aboutCtrl'
        }).

        otherwise({
            redirectTo: '/home'
        });
}]);

