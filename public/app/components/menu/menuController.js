angular.module('app').controller('menuController', menuController);

function menuController($scope, $state, CardFactory) {
    var vm = this;
    vm.getCash = getCash;

    activate();

    function activate() {
        vm.card = CardFactory.getCard();
        if(!vm.card){
            $state.go('home');
        }
    }

    function getCash() {
        $state.go('cash');
    }
}
