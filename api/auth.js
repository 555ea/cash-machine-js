var Card = require('./models/Card');
var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
        usernameField: 'number',
        passwordField: 'pin'
    },
    function (number, pin, done) {
        Card.findOne({number: number}, function (err, card) {
            if (err) {
                return done(err);
            }
            if (!card) {
                return done({message: 'Incorrect card number.'}, false);
            }
            if (!(card.pin == pin)) {
                return done({message: 'Incorrect pin.'}, false);
            }
            return done(null, card);
        });
    }
));

passport.serializeUser(function (card, done) {
    done(null, card);
});

passport.deserializeUser(function (card, done) {
    done(null, card);
});

router.post('/login', function (req, res, next) {
    passport.authenticate('local',
        function (err, card, info) {
            if (err) {
                next(err);
                return;
            }
            if (!card) {
                console.error('Card not logged in');
                next(info);
            }
            else {
                console.log('Card authenticated');
                res.json(req.user);
            }
        })(req, res, next);
});

module.exports = router;