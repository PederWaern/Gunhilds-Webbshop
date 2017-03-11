angular.module("products")
.factory("productsService",["$http", function($http) {
    return {
        getProducts: function() {
            return $http.get("http://nackbutik.azurewebsites.net/api/product");
        },

        getProductCategory: function() {
                return $http.get("http://nackbutik.azurewebsites.net/api/category");
        },

        getProductCategoryById: function(categoryID) {
                return $http.get("http://nackbutik.azurewebsites.net/api/category/" + categoryID);
        },

        getProductById: function(id) {  
            return $http.get("http://nackbutik.azurewebsites.net/api/product/" + id);
        },
    };
}]);