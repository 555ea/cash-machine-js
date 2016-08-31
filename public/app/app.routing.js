angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('main', {
            url: "/",
            templateUrl: "/app/components/home/homeView.html",
        })
        .state('menu', {
            url: "/menu",
            templateUrl: "/app/components/menu/menuView.html",
        })
})