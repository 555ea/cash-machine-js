var express = require('express');
var app = express();
app.use(express.static('public'));

app.listen(2222, function () {
    console.log('Example app listening on port 2222!');
});