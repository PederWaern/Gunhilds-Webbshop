angular.module("cart")
    .controller("cartController", ["$scope", "$http", "$location", "cartService", function($scope, $http, $location, cartService){

        $scope.products = cartService.getCart();
        $scope.removeFromCart = function(prod) {
            cartService.removeProductFromCart(prod);
            $scope.products = cartService.getCart();
        }

        $scope.emptyCart = function() {
            cartService.clearCart();
            $scope.products = cartService.getCart();
        }
    }]);