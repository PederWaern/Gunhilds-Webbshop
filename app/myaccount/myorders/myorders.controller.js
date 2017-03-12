angular.module("myorders")
    .controller("myOrdersController", ["$scope", "$location", "loginService", function ($scope, $location, loginService) {

         if(!loginService.getLoginStatus()) {
                $location.path("/Login");
            };
    }]);

    