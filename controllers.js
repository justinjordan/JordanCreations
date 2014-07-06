var jcControllers = angular.module('jcControllers', []);

jcControllers.controller('homeCtrl', function($scope){
    $scope.bubbles = [
        {
            imageUrl: 'images/thumbnail.jpg',
            title: 'Post1',
            author: 'Justin Jordan',
            when: '3 months ago',
            message: 
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            imageUrl: 'images/thumbnail.jpg',
            title: 'Post2',
            author: 'Justin Jordan',
            when: '3 months ago',
            message: 
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            imageUrl: 'images/thumbnail.jpg',
            title: 'Post3',
            author: 'Justin Jordan',
            when: '3 months ago',
            message: 
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            imageUrl: 'images/thumbnail.jpg',
            title: 'Post4',
            author: 'Justin Jordan',
            when: '3 months ago',
            message: 
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    ];
});

jcControllers.controller('aboutCtrl', function($scope){
    $scope.message = 'This is the about page.';
});