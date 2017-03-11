angular.module("cart")
    .factory("cartService", ["$http", function ($http) {
        var cart = [];

        return {
            getCartSize: function () {
                return cart.length;
            },

            addProductToCart: function (product) {
                //om inga produkter finns i carten, adda produkten.
                var productFound = false;
                if (cart.length == 0) {
                    product.amount = 1;
                    cart.push(product);
                    // annars loopa igenom carten och se om produkten redan är tillagd.
                } else {
                    for (var i = 0; i < cart.length; i++) {
                        if (product.name == cart[i].name) {
                            productFound = true;
                            cart[i].amount += 1;
                            i = cart.length;
                        }
                    }
                    if (!productFound){
                        product.amount = 1;
                        cart.push(product);
                    }
                }
            },

        removeProductFromCart: function (product) {
            for (var i = cart.length - 1; i >= 0; i--) {
                if (product.id == cart[i].id) {
                    cart.splice(i, 1);
                }
            }
        },

        clearCart: function () {
            cart = [];
        },

        getCart: function () {
            return cart;
        },
        getAmountArticlesAdded : function () {
            var amount = 0;
            for (var i = 0; i < cart.length; i++) {
                amount += cart[i].amount;
            }
            return amount;
        }
        };



    }]);