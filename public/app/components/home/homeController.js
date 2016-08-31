angular.module('app').controller('homeController', homeController);

function homeController($scope, $http, $state) {
    var vm = this;
    vm.card = {number: undefined, pin: undefined};
    //functions
    vm.login = login;
    vm.keyboardConfig = {
        layout: 'custom',
        restrictInput: true,
        preventPaste: true,
        autoAccept: true,
        maxLength: 4,
        display:{
            bksp:'\u232b'
        },
        customLayout: {
            'normal': [
                '1 2 3 4 5 6 7 8 9 {bksp}',
            ],
        },
        usePreview: false
    };

    activate();

    function activate() {
        console.log('test')
    }

    function login() {
        vm.loggingIn = true;
        $http({method: 'POST', url: '/auth/login', data: vm.card})
            .then(function (res) {
                console.log(res);
                $state.go('menu');
            })
            .catch(function (err) {
                console.error(err);
            })
            .finally(function () {
                vm.loggingIn = false;
            })
    }
}

