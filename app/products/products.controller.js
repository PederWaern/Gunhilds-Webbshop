angular.module("products")
    .controller("productsController", ["$scope", "$location", "productsService", "cartService", function ($scope, $location, productsService, cartService) {
        var products = [];
        var categories = [];
        $scope.cartNumber = 0;
        // var cart = [];

        $scope.addProductToCart = function(product) {
            console.log("from addProductToCart: product" + product.name + "added!");
        };


        $scope.test = "testare";

         $scope.productClicked = function (id) {
            $location.path("/Products/" + id);
        }

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
                    
                    console.log(products);
                    console.log(categories);
                });
            })

        });

        
    }]);

   