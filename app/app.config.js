angular.module("app")
.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/products/products.template.html",
        controller: "productsController"
    })
    .when("/Products", {
        templateUrl: "app/products/products.template.html",
        controller: "productsController"
    })
    .when("/Products/:productId", {
        templateUrl: "app/productdetails/productdetails.template.html",
        controller: "productDetailsController"
    })

    .when("/Login", {
        templateUrl: "app/login/login.template.html",
        controller: "loginController"
    })
     .when("/MyAccount", {
        templateUrl: "app/myaccount/myaccount.template.html",
        controller: "myAccountController"
    })
     .when("/MyOrders/:customerId", {
        templateUrl: "app/myaccount/myorders/myorders.template.html",
        controller: "myOrdersController"
    })
     .when("/Cart", {
        templateUrl: "app/cart/cart.template.html",
        controller: "cartController"
    })
     .when("/AddCustomer", {
        templateUrl: "app/addcustomer/addcustomer.template.html",
        controller: "addCustomerController"
    })
    .otherwise("/Products");
    $locationProvider.html5Mode(true);
}]);