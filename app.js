(function(){
    
    var jcApp = angular.module('jcApp', [
        'ngRoute',
        'jcControllers'
    ]);

    jcApp.config(['$routeProvider', function($routeProvider){
        $routeProvider.

            when('/blog', {
                templateUrl: 'partials/blog.html',
                controller: 'blogCtrl'
            }).
        
            when('/music', {
                templateUrl: 'partials/music.html',
                controller: 'musicCtrl'
            }).
        
            when('/photo', {
                templateUrl: 'partials/photo.html',
                controller: 'photoCtrl'
            }).
        
            when('/about', {
                templateUrl: 'partials/about.html',
                controller: 'aboutCtrl'
            }).
        
            when('/contact', {
                templateUrl: 'partials/contact.html',
                controller: 'contactCtrl'
            }).

            otherwise({
                redirectTo: '/blog'
            });
    }]);
    
    
})();