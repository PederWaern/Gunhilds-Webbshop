angular.module("cart")
    .factory("cartService", ["$http", "loginService", function ($http, loginService) {
        var cart = [];

        return {
            getCartSize: function () {
                return cart.length;
            },

            addProductToCart: function (product) {
                //om inga produkter finns i carten, adda produkten.
                var productFound = false;
                if (cart.length == 0) {
                    product.quantity = 1;
                    cart.push(product);
                    // annars loopa igenom carten och se om produkten redan är tillagd.
                } else {
                    for (var i = 0; i < cart.length; i++) {
                        if (product.name == cart[i].name) {
                            productFound = true;
                            cart[i].quantity += 1;
                            i = cart.length;
                        }
                    }
                    if (!productFound) {
                        product.quantity = 1;
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
            getAmountArticlesAdded: function () {
                var amount = 0;
                for (var i = 0; i < cart.length; i++) {
                    amount += cart[i].quantity;
                }
                return amount;
            },
            getTotalPrice: function () {
                var totalPrice = 0;
                angular.forEach(cart, function (product) {
                    totalPrice += product.price * product.quantity;
                })
                return totalPrice;
            },

            sendOrder: function (order) {
                return $http.post("http://nackbutik.azurewebsites.net/api/order", order);
            },


        };



    }]);