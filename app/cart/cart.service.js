angular.module("cart")
    .factory("cartService", ["$http", function ($http) {
        var cart = [];

        return {
            getCartSize: function () {
                return cart.length;
            },

            addProductToCart: function (product) {
                cart.push(product);
            },

            removeProductFromCart: function (product) {
                for (var i = cart.length - 1; i >= 0; i--) {
                    if (product.id == cart[i].id) {
                        cart.splice(i, 1);
                    }
                }
            },
            
            clearCart: function() {
                cart = [];
            }
        };



    }]);