angular.module("cart")
    .controller("cartController", ["$scope", "$http", "$location", "cartService","loginService", 
    function($scope, $http, $location, cartService, loginService){

        $scope.products = cartService.getCart();
        $scope.removeFromCart = function(prod) {
            cartService.removeProductFromCart(prod);
            $scope.products = cartService.getCart();
            $scope.getTotalPrice = cartService.getTotalPrice();
        }

        $scope.emptyCart = function() {
            cartService.clearCart();
            $scope.products = cartService.getCart();
        }

        $scope.getTotalPrice = cartService.getTotalPrice();

        $scope.sendOrder = function() {
            var order = {};
            var userId = loginService.getUserId();
            console.log(userId);
            var products = [];
            var item = {};
            var cart = cartService.getCart();

            angular.forEach(cart, function (prod) {
                    item.productId = prod.id;
                    item.quantity = prod.quantity;
                    products.push(item);
                    item = {};
                });
            // console.log(products);

            order.customerId = userId;
            order.products = products;
            console.log(order);

            
            


        }
    }]);