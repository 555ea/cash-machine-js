angular.module('app').controller('menuController', menuController);

function menuController($scope, $http) {
    var vm = this;

    activate();

    function activate() {
        console.log('menu')
    }
}
