angular.module("products")
    .controller("productsController", ["$scope", "$location", "productsService", "cartService", function ($scope, $location, productsService, cartService) {
        var products = [];
        var categories = [];
        $scope.cartSize = cartService.getAmountArticlesAdded();

        $scope.sortType = 'name';
        $scope.sortReverse  = false;
 
        productsService.getProductCategory().then(function (response) {
            categories = response.data;
            $scope.categories = categories;
            $scope.categorySelect = $scope.categories[0];

            productsService.getProducts().then(function (response) {
                products = response.data;

                    
                angular.forEach(categories, function (category) {
                    angular.forEach(products, function (product) {
                        if (product.categoryId == category.id) {
                            product.categoryName = category.name;
                        }
                    })

                    $scope.products = products;
                });
            })

        });


        $scope.addProductToCart = function(product) {
            cartService.addProductToCart(product);
            $scope.cartSize = cartService.getAmountArticlesAdded();

        };

         $scope.productClicked = function (id) {
            $location.path("/Products/" + id);
        }

        
    }]);

   