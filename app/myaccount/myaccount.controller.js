angular.module("myaccount")
    .controller("myAccountController", ["$scope", "$location", "loginService", "cartService", function ($scope, $location, loginService, cartService) {

         if(!loginService.getLoginStatus()) {
                $location.path("/Login");
            };

        $scope.logoutText = "Du är inloggad som " + loginService.getNames();
        $scope.showLogin = false;
        $scope.showLogout = true;
        $scope.showMyOrders = true;
        $scope.showMyDetails = true;

        $scope.goToLogin = function (){
            $location.path("/Login");
        }


        $scope.logOut = function () {
            loginService.setUserLoggedIn(false);
            $scope.logoutText = loginService.getNames() + " är utloggad";
            loginService.setNames("","");
            cartService.clearCart();
            $scope.showLogout = false;
            $scope.showMyOrders = false;
            $scope.showMyDetails = false;
            $scope.showLogin = true;

        }

    }]);

    