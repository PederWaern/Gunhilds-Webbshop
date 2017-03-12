angular.module("myorders")
.factory("myOrderService",["$http", function($http) {
    return {
       

       getOrdersByCustomerId: function(customerId) {
            return $http.get("http://nackbutik.azurewebsites.net/api/order?customerid=" + customerId);
        },

        getOrderDetails: function(orderId) {  
            return $http.get("http://nackbutik.azurewebsites.net/api/order/" + orderId);
        },
    };
}]);