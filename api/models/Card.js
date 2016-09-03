var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Card = new Schema({
    number: {
        type: String,
        index: {unique: true}
    },
    pin: {
        type: String
    },
    balance: {
        type: Number
    },
    isAdmin: {
        type: Boolean
    }
});

module.exports = mongoose.model('Card', Card);