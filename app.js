var express = require('express');
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var connection = mongoose.connect("mongodb://localhost:27017/cash-machine");
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//npapp.use(cookieParser());
app.use(session({
    secret: 'IAMBATMAN',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));

var api = require('./api/api');
var auth = require('./api/auth');

app.use('/api', api);
app.use('/auth', auth);

app.use(function(err, req, res, next) {
    console.error(err);
    var message = err.message||'Something broke!';
    var code = 500;
    if(err.code){
        code = err.code;
    }
    res.status(code).json(message);
});

app.get('/*', function (req, res) {
    res.sendFile(__dirname  + '/public/index.html');
})

app.listen(2222, function () {
    console.log('Example app listening on port 2222!');
});