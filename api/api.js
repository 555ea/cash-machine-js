var Card = require('./models/Card');
var express = require('express');
var router = express.Router();

function init() {
    Card.find({})
        .then(function (cards) {
            if (cards && !cards.length) {
                var card = new Card({number: 4111111111111111, pin: 1234, balance: 100})
                return card.save()
            }
        })
        .then(function (card) {
            if (card) {
                console.log('Card ' + card.number + ' was set.')
            }
        })
        .catch(function (err) {
            console.error(err);
        })
}
init();

module.exports = router;