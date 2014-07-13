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
    
    /*  == HOME Controller ==  */
    jcControllers.controller('homeCtrl', function($scope, $http){
        
        $http.get('data/news.json')
            .success(function(data, status, headers, config){
                $scope.bubbles = data;    
            })
            .error(function(data, status, headers, config){
                alert('error');
                /**************************
                ** TODO:  error handling **
                **************************/
            });
                
        /*  == Initial amount of words to display for each bubble ==  */
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

    /*  == BLOG Controller ==  */
    jcControllers.controller('blogCtrl', function($scope){
        
        $scope.message = 'This is the blog page.';
    });
    
    /*  == PHOTO Controller ==  */
    jcControllers.controller('photoCtrl', function($scope){
        
        $scope.message = 'This is the photo page.';
    });
    
    /*  == CONTACT Controller ==  */
    jcControllers.controller('contactCtrl', function($scope){
        
        $scope.message = 'This is the contact page.';
    });
    
    /*  == ABOUT Controller ==  */
    jcControllers.controller('aboutCtrl', function($scope){
        
        $scope.message = 'This is the about page.';
    });
    
})();