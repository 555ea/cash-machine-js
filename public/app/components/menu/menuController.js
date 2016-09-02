angular.module('app').controller('menuController', menuController);

function menuController($scope, $state, CardFactory) {
    var vm = this;
    vm.getCash = getCash;
    vm.logout = logout;

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

    function logout() {
        //send logout request
        $state.go('home');
    }
}
