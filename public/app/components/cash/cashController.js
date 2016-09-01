angular.module('app').controller('cashController', cashController);

function cashController($state, CardFactory) {
    var vm = this;
    vm.withdrawMoney = withdrawMoney;
    vm.exit = exit;

    activate();

    function activate() {
        vm.card = CardFactory.getCard();
        if(!vm.card){
            $state.go('home');
        }
    }

    function withdrawMoney() {
        CardFactory.withdrawMoney(vm.amountOfMoney).then(function () {
            $state.go('menu');
        });
    }

    function exit() {
        $state.go('menu');
    }
}
