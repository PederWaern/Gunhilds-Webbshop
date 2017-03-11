angular.module("addcustomer")
    .controller("addCustomerController", ["$scope", "$location", "addCustomerService", function ($scope, $location, addCustomerService ) {

        $scope.createCustomer = function() {
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
                console.log("User was created successfully!")
                
            }, function errorCallback(response) {
                console.log("Failed to create user");
            });

        }

        
        
    }]);

    


