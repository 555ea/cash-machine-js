angular.module('app').controller('homeController', homeController);

function homeController($scope, $http, $state, CardFactory) {
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
        display: {
            bksp: '\u232b'
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
        CardFactory.login(vm.card)
            .then(function () {
                $state.go('menu');
            })
            .finally(function () {
                vm.loggingIn = false;
            })
    }
}

