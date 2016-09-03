angular.module('app').config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    }).hashPrefix('!');

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
        .state('admin', {
            url: "/admin",
            templateUrl: "/app/components/admin/adminView.html",
        })
})