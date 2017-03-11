angular.module("cart")
    .controller("cartController", ["$scope", "$http", "$location", "cartService", function($scope, $http, $location, cartService){

        $scope.products = cartService.getCart();
        

    }]);