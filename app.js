var express = require('express');
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var connection = mongoose.connect("mongodb://localhost:27017/cash-machine");
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var api = require('./api/api');
app.use('/api', api);

app.listen(2222, function () {
    console.log('Example app listening on port 2222!');
});