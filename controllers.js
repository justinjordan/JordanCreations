(function(){

    var jcControllers = angular.module('jcControllers', []);

    /*  == MAIN Controller ==  */
    jcControllers.controller('mainCtrl', function($scope){
        
        $scope.mobile_menu = false;
        
        $scope.showMenu = function(){
            $scope.mobile_menu = true;
        }
        $scope.hideMenu = function(){
            $scope.mobile_menu = false;
        }
        
    });
    
    /*  == NAV Controller ==  */
    jcControllers.controller('navCtrl', function($scope, $location){
        
        $scope.navClass = function(page){
            
            var currentRoute = $location.path().substring(1) || 'home';
            return page === currentRoute ? 'nav-active' : '';
            
        };
        
    });
    
    /*  == BLOG Controller ==  */
    jcControllers.controller('blogCtrl', function($scope, $http){
        
        $scope.blogPosts = [];
        
        $http.get('data/blog.json')
            .success(function(data, status, headers, config){
                $scope.blogPosts = data;    
            })
            .error(function(data, status, headers, config){
                /**************************
                ** TODO:  error handling **
                **************************/
            });
                
        /*  == Initial amount of words to display for each blogPost ==  */
        $scope.wordLimit = 100;
        
        /*  == countWords = self explanatory ==  */
        $scope.countWords = function(input){
            var words = input.split(' ');
            
            return words.length;
        }
        /*  == END. countWords ==  */
        
        /*  == limitWords = Parse words from input ==  */
        $scope.limitWords = function(input, limit){
            
            var output = '';
            var words = input.split(' ');
            
            if ( words.length < limit || limit == 0 )
            {
                output = input;
            }
            else
            {
                for (var i = 0; i < limit; i++)
                {
                    output += words[i];
                    
                    if ( i < limit-1 )
                    {
                        output += ' ';
                    }
                    else
                    {
                        output += '...';
                    }
                }
            }
            
            return output;
            
        };
        /*  == END. limitWords ==  */
    });

    /*  == MUSIC Controller ==  */
    jcControllers.controller('musicCtrl', function($scope, $http){

        $scope.musicPosts = [];
        
        $http.get('data/music.json')
            .success(function(data, status, headers, config){
                $scope.musicPosts = data;
            })
            .error(function(data, status, headers, config){
                /**************************
                ** TODO:  error handling **
                **************************/
            });
    });
    
    /*  == PHOTO Controller ==  */
    jcControllers.controller('photoCtrl', function($scope){
        
        $scope.message = 'This is the photo page.';
    });
    
    /*  == ABOUT Controller ==  */
    jcControllers.controller('aboutCtrl', function($scope){
        
        $scope.message = 'This is the about page.';
    });
    
    /*  == CONTACT Controller ==  */
    jcControllers.controller('contactCtrl', function($scope){
        
        $scope.message = 'This is the contact page.';
    });
    
})();