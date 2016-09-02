angular
    .module('app')
    .factory('CardFactory', function ($http) {

        var factory = {};

        var service = {
            login: login,
            getCard: getCard,
            withdrawMoney:withdrawMoney,
        };
        return service;

        function withdrawMoney(amount) {
            return $http({method: 'PUT', url: '/api/card', data: {amount:amount}})
                .then(function (res) {
                    console.log(res);
                    factory.card.balance -= parseFloat(amount);
                })
                .catch(function (err) {
                    console.error(err);
                    throw err.data;
                })
        }

        function getCard() {
            return factory.card;
        }

        function login(card) {
            return $http({method: 'POST', url: '/auth/login', data: card})
                .then(function (res) {
                    console.log(res);
                    factory.card = res.data;
                })
                .catch(function (err) {
                    console.error(err);
                    throw err.data;
                })
        }
    });