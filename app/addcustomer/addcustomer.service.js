angular.module("addcustomer")
.factory("addCustomerService",["$http", function($http) {
    return { 
        createCustomer: function (customerDetails){
            return $http.post("http://nackbutik.azurewebsites.net/api/customer", customerDetails);
        },
    
     }
    
}]);