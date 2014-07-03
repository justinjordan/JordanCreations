(function(){

	var app = angular.module('store', [ ]);
	
	app.controller('StoreController', function()
	{
        this.users = [ User('Justin', 25, 'Mpls') ];
	});
	
    function User(name, age, location)
    {
        return {
            name: name,
            age: age,
            location: location
        };
    }
    
})();
