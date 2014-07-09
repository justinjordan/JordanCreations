(function(){
    
    var jcApp = angular.module('jcApp', [
        'ngRoute',
        'ngAnimate',
        'jcControllers'
    ]);

    jcApp.config(['$routeProvider', function($routeProvider){
        $routeProvider.

            when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'homeCtrl'
            }).
        
            when('/blog', {
                templateUrl: 'partials/blog.html',
                controller: 'blogCtrl'
            }).
        
            when('/photo', {
                templateUrl: 'partials/photo.html',
                controller: 'photoCtrl'
            }).
        
            when('/contact', {
                templateUrl: 'partials/contact.html',
                controller: 'contactCtrl'
            }).

            when('/about', {
                templateUrl: 'partials/about.html',
                controller: 'aboutCtrl'
            }).

            otherwise({
                redirectTo: '/home'
            });
    }]);
    
    
})();