angular.module("logout")
    .controller("logoutController", ["$scope", "$location", "loginService", "cartService", function ($scope, $location, loginService, cartService) {

         if(!loginService.getLoginStatus()) {
                $location.path("/Login");
            };
        $scope.logoutText = "Du är inloggad som " + loginService.getNames();
    
        $scope.logOut = function () {
            console.log("hej från logout");
            loginService.setUserLoggedIn(false);
            $scope.logoutText = loginService.getNames() + " är utloggad";
            loginService.setNames("","");
            cartService.clearCart();

        }
    }]);

    