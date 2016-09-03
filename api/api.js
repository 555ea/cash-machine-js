var Card = require('./models/Card');
var express = require('express');
var router = express.Router();
var cardGenerator = require('creditcard-generator');

function initAdmin() {
    var adminKeyWord = 'admin';
    Card.findOne({isAdmin:true})
        .then(function (card) {
            if (!card) {
                var card = new Card({number: adminKeyWord, pin: adminKeyWord, isAdmin:true})
                return card.save()
            }
        })
        .then(function (card) {
            if (card) {
                console.log('Admin account init at \''+adminKeyWord+'\'')
            }
        })
        .catch(function (err) {
            console.error(err);
        })
}
initAdmin();

router.put('/card', function (req, res, next) {
    if (req.user) {
        var amount = req.body.amount;
        Card.findById(req.user._id, function (err, card) {
            if (err) next(err);
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
            else {
                next('Insufficient funds');
            }
        })
    } else {
        next({code: 401})
    }
});

router.get('/card', function (req, res, next) {
    if (req.user && req.user.isAdmin) {
        generateCard()
            .then(function (card) {
                res.json(card);
            })
            .catch(function (err) {
                next(err);
            })
    } else {
        next({code: 401})
    }
});

function generateCard() {
    return new Promise(function (resolve, reject) {
        generateRecursive();

        function generateRecursive() {
            var number = cardGenerator.GenCC();
            Card.findOne({number: number})
                .then(function (card) {
                    if (card) {
                        generateRecursive();
                    } else {
                        var pin = (Math.random() + '').substring(2, 6);
                        card = new Card({number: number, pin: pin, balance: 100})
                        resolve(card.save());
                    }
                })
        }
    })


}

module.exports = router;