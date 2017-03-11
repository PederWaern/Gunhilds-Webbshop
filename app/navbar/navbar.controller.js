 angular.module("navbar")
        .controller("navbarController", ["$scope", "$location", "loginService", "navbarService", 
        function ($scope, $location, loginService, navbarService){
            
            // $scope.loginText = loginService.getNavText();
        

         /*   $scope.$watch("loginService.getLoginStatus()", function(newValue) {
                console.log(loginService.getLoginStatus());
               
               if (loginService.getLoginStatus()){
                 $scope.loginText = "Logga ut";
               } else {
                 $scope.loginText = "Logga in";
               }
            });*/
        
        $scope.$watch('loginService.getLoginStatus()', function(newVal){
            console.log(loginService.getLoginStatus() + " status from Navbar Controller")
            if (loginService.getLoginStatus()){
                 $scope.loginText = "Logga ut";
               } else {
                 $scope.loginText = "Logga in";
               }
                }, true);
        
        }]);


