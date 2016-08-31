var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Card = new Schema({
    number: {
        type: Number,
        index: {unique: true}
    },
    pin:{
        type: Number
    },
    balance:{
        type: Number
    }
});

module.exports = mongoose.model('Card', Card);