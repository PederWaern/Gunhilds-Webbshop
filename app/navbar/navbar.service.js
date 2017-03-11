angular.module("navbar")
.factory("navbarService",["$http", function($http) {
    var isLoggedin;

    return { 
        getNotLoggedInText: function () {
             return "Logga in";
        },
        getLoggedInText: function () {
            return "Logga ut";
         }        
     };
    
}]);