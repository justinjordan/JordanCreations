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
    jcControllers.controller('homeCtrl', function($scope){
        
        /*  == Initial amount of words to display for each bubble ==  */
        $scope.word_limit = 100;
        
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
        
        $scope.bubbles = [
            {
                showAll: false,
                imageUrl: 'images/thumbnail.jpg',
                title: 'Post 1',
                author: 'Justin Jordan',
                when: '3 months ago',
                message: 
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                showAll: false,
                imageUrl: 'images/thumbnail.jpg',
                title: 'Post 2',
                author: 'Justin Jordan',
                when: '3 months ago',
                message: 
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                showAll: false,
                imageUrl: 'images/thumbnail.jpg',
                title: 'Post 3',
                author: 'Justin Jordan',
                when: '3 months ago',
                message: 
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
        ];
        
        
        /*  == Generate limited_msg ==  */
        for ( i = 0; i < $scope.bubbles.length; i++ )
        {
            $scope.bubbles[i].limited_msg = $scope.limitWords($scope.bubbles[i].message, $scope.word_limit);
        }
        /*  == END.  Generate limited_msg ==  */
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