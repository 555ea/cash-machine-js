angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "/app/components/home/homeView.html",
        })
        .state('menu', {
            url: "/menu",
            templateUrl: "/app/components/menu/menuView.html",
        })
        .state('cash', {
            url: "/cash",
            templateUrl: "/app/components/cash/cashView.html",
        })
})