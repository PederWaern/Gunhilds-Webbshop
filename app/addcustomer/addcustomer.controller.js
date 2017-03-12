angular.module("addcustomer")
    .controller("addCustomerController", ["$scope", "$location", "addCustomerService", "loginService", function ($scope, $location, addCustomerService, loginService) {

        $scope.createCustomer = function () {
            $scope.showDanger = false;

            var cust = {};
            cust.firstName = $scope.firstName;
            cust.lastName = $scope.lastName;
            cust.email = $scope.email;
            cust.phone = $scope.phone;
            cust.password = $scope.password;
            cust.address = $scope.address;
            cust.postalCode = $scope.postalCode;
            cust.city = $scope.city;

            addCustomerService.createCustomer(cust).then(function successCallback(response) {
                    var user = cust;

                    loginService.loginUser(user).then(function successCallback(response) {
                        var res = {};
                        res = response;
                        loginService.setUser(res.data);
                        loginService.setUserLoggedIn(true);
                        $location.path("/Logout");


                    }, function errorCallback(response) {
                        $scope.showDanger = true;
                        $scope.text = "Felaktigt användarnamn eller lösenord";
                        loginService.setUserLoggedIn(false);
                    });

            }, function errorCallback(response) {
                $scope.text = "Lyckades inte skapa användaren, var vänlig försök igen senare";
            });

        }



    }]);




