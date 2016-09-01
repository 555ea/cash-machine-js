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

router.put('/card', function (req, res, next) {
    if (req.user) {
        var amount = req.body.amount;
        Card.findById(req.user._id, function (err, card) {
            if(err) next(err);
            if (card.balance && card.balance > amount) {
                card.balance -= amount;
                card.save(function (err) {
                    if (err) {
                        next(err);
                    } else {
                        res.json();
                    }
                });
            }
        })
    } else {
        next({code: 401})
    }
});

module.exports = router;