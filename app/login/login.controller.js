angular.module("login")
    .controller("loginController", ["$scope", "$location", "loginService", function ($scope, $location, loginService) {

         if(loginService.getLoginStatus()) {
                $location.path("/Logout");
            };


        $scope.login = function () {
            $scope.showDanger = false;
            $scope.showSuccess = false;
            
            var user = [];
            user.email = $scope.email;
            user.password = $scope.password;
            
            loginService.loginUser(user).then(function successCallback(response) {
                var res = {};
                res = response;
                
                loginService.setUser(res.data);
                loginService.setUserLoggedIn(true);

                $scope.showSuccess = true;
                $scope.text = res.data.firstName + " " + res.data.lastName + " är inloggad";
                
                

            }, function errorCallback(response) {
                $scope.showDanger = true;
                $scope.text = "Felaktigt användarnamn eller lösenord";
                loginService.setUserLoggedIn(false);
            });
        }
        
    }]);

    


