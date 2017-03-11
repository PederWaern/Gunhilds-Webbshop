angular.module("login")
.factory("loginService",["$http", function($http) {
    var isLoggedIn = false;
    var navText = "Logga in";
    var user = {};

    return { 
        loginUser: function (loginDetails){
            var toSend = {};
            toSend.email = loginDetails.email;
            toSend.password = loginDetails.password;
          
            return $http.post("http://nackbutik.azurewebsites.net/api/customer/login", toSend);
        },
        setUserLoggedIn: function (bool) {
            if(bool) {
                isLoggedIn = true;
                navText = "Logga ut";
            } else {
                isLoggedIn = false;
                navText = "Logga in";
            }
        },

        getLoginStatus: function () {
            return isLoggedIn;
        },

        getNavText: function() {
            return navText;
        },
        
        setNames: function (fName,lName) {
            firstName = fName; 
            lastName = lName;
        },
        getNames: function () {
            return user.firstName + " " + user.lastName;
        },

        setUser: function(userO) {
            user = userO;
            console.log("from login service, user is: " + user.firstName + user.lastName);
        },

        getUser: function() {
            return user;
        },

        getUserId: function() {
            return user.customerId;
        }
    
     }
    
}]);