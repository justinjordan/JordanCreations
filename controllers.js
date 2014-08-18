(function(){

    var jcControllers = angular.module('jcControllers', []);

    jcControllers.run(function($rootScope){
        
        // Enable/Disable Scrolling
        $rootScope.scrolling = true;
        
    });
    
    /*  == MAIN Controller ==  */
    jcControllers.controller('mainCtrl', function($scope, $rootScope){
        
        $scope.mobile_menu = false;
        
        $scope.showMenu = function(){
            $scope.mobile_menu = true;
            $rootScope.scrolling = false;
        }
        $scope.hideMenu = function(){
            $scope.mobile_menu = false;
            $rootScope.scrolling = true;
        }
        
    });
    
    /*  == NAV Controller ==  */
    jcControllers.controller('navCtrl', function($scope, $location, $rootScope){
        
        $scope.navClass = function(page){
            
            var currentRoute = $location.path().substring(1) || 'home';
            return page === currentRoute ? 'nav-active' : '';
            
        };
        
    });
    
    /*  == BLOG Controller ==  */
    jcControllers.controller('blogCtrl', function($scope, $http, $rootScope){
        
        /**********************************
        ***** Blog Post Functionality *****
        **********************************/
        
        $scope.blogPosts = [];
        
        $http({
            url: 'data/blog.php',
            method: 'GET',
            params: {i: 0, num: 5}
        })
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
        
        /*  == formatDate ==  */
        $scope.dateToUtc = function(date){
            
            var myDate = Date.parse(date);
                        
            return myDate;
            
        }
        /*  == END. formatDate == */
        
        
        
        /********************************
        ***** Profile Functionality *****
        ********************************/
        
        $scope.profile = {
            view: false,
            loading: true,
            user: []
        };
        
        /* loadProfile */
        $scope.loadProfile = function(handle)
        {
            $scope.profile.view = true;
            $scope.profile.loading = true;
            
            $rootScope.scrolling = false;
            
            $http({
                url: 'data/user.php',
                method: 'GET',
                params: {handle: handle}
            })
                .success(function(data, status, headers, config){
                    
                    /* Call showProfile function */
                    /* Data comes in an array, but we only need the first element (ie. one user). */
                    $scope.showProfile(data[0]);
                })
                .error(function(data, status, headers, config){
                    
                    // ERROR HANDLING GOES HERE
                    
                });
        }
        /*  == END. loadProfile ==  */
        
        /* showProfile */
        $scope.showProfile = function(data)
        {
            $scope.profile.loading = false;
            
            $scope.profile.data = data;
        }
        /*  == END. showProfile ==  */
        
        /* showProfile */
        $scope.closeProfile = function()
        {
            $scope.profile.view = false;
            $rootScope.scrolling = true;
        }
        /*  == END. showProfile ==  */
        
        /**** END of Profile ****/

    });

    /*  == MUSIC Controller ==  */
    jcControllers.controller('musicCtrl', function($scope, $http, $rootScope){

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
    jcControllers.controller('photoCtrl', function($scope, $rootScope){
        
        $scope.message = 'This is the photo page.';
    });
    
    /*  == ABOUT Controller ==  */
    jcControllers.controller('aboutCtrl', function($scope, $rootScope){
        
        $scope.message = 'This is the about page.';
    });
    
    /*  == CONTACT Controller ==  */
    jcControllers.controller('contactCtrl', function($scope, $rootScope){
        
        $scope.message = 'This is the contact page.';
    });
    
})();