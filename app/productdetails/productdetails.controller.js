
angular.module("productDetails")
    .controller("productDetailsController", ["$scope", "$location","$routeParams", "productsService", 
    function ($scope, $location, $routeParams, productsService) {

        var product = {};
    
     productsService.getProductById($routeParams.productId).then(function(response){
        product = response.data;
        
        productsService.getProductCategoryById(product.categoryId).then(function(response){
            category = response.data;
            product.categoryName = category.name;
            $scope.product = product;
        });
    });
    
}]);
    

       

      