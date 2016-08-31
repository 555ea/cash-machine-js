angular.module('app').controller('homeController', homeController);

function homeController($scope) {
    var vm = this;

    //functions

    activate();

    function activate() {
        console.log('test')
    }
}

