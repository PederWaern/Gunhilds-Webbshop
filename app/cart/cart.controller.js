angular.module("cart")
    .controller("cartController", ["$scope", "$http", "$location", "cartService", "loginService", 
    function($scope, $http, $location, cartService, loginService){

        
        if (loginService.getLoginStatus() && cartService.getCartSize() > 0) {
            $scope.showSendButton = true;
        };

        if (!loginService.getLoginStatus()){
            $scope.showLoginButton = true;
        }

    
        $scope.products = cartService.getCart();
        $scope.removeFromCart = function(prod) {
            cartService.removeProductFromCart(prod);
            $scope.products = cartService.getCart();
            $scope.getTotalPrice = cartService.getTotalPrice();
            if (cartService.getCartSize() < 1) {
                $scope.showSendButton = false;
            }
        }

        $scope.emptyCart = function() {
            cartService.clearCart();
            $scope.products = cartService.getCart();
            $scope.getTotalPrice = cartService.getTotalPrice();
            $scope.showSendButton = false;

        }

        $scope.getTotalPrice = cartService.getTotalPrice();

        $scope.sendOrder = function() {
            var order = {};
            var userId = loginService.getUserId();
            var cart = cartService.getCart();

            var products = [];
            var item = {};
            angular.forEach(cart, function (prod) {
                    item.productId = prod.id;
                    item.quantity = prod.quantity;
                    products.push(item);
                    item = {};
                });
           

            order.customerId = userId;
            order.products = products;
            cartService.sendOrder(order).then(function successCallback(response) {
                $scope.showSuccess = true;
                $scope.text = "Tack, din order har skickats!";
                cartService.clearCart();
                

            }, function errorCallback(response) {
                $scope.showDanger = true;
                $scope.text = "Lyckades inte skicka din order";
            });





            
            


        }
    }]);