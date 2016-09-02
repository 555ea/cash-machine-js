angular.module('app').controller('cashController', cashController);

function cashController($state, $interval, CardFactory) {
    var vm = this;
    vm.withdrawMoney = withdrawMoney;
    vm.exit = exit;

    activate();

    function activate() {
        vm.card = CardFactory.getCard();
        if (!vm.card) {
            $state.go('home');
        }
    }

    function withdrawMoney() {
        var amount = vm.amountOfMoney;
        CardFactory.withdrawMoney(amount)
            .then(function () {
                vm.success = amount;
                vm.error = undefined;
                vm.seconds = 3;
                var interval = $interval(function () {
                    vm.seconds--;
                    if (vm.seconds == 0) {
                        $interval.cancel(interval);
                        $state.go('menu');
                    }
                }, 1000)
            })
            .catch(function () {
                vm.error = amount;
            });
    }

    function exit() {
        $state.go('menu');
    }
}
