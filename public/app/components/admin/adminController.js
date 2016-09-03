angular.module('app').controller('adminController', adminController);

function adminController(CardFactory) {
    var vm = this;
    vm.login = login;
    vm.generate = generate;

    activate();

    function activate() {
        vm.cards = [];
    }

    function login() {
        CardFactory.login({number: vm.input, pin: vm.input})
            .then(function () {
                vm.authorized = true;
            }).catch(function () {
            vm.error = 'Incorrect login';
        })
    }

    function generate() {
        CardFactory.generateCard()
            .then(function (card) {
                vm.cards.push(card);
            })
    }
}
