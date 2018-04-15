let express = require('express');
let app = express();
let port = 80;
let path = require('path');

app.get('/calc.html', function (req, res) {
    console.info("Hello server..");
    res.sendFile(path.join(__dirname + '/client/calc.html'));
});

app.get('/my.js', function (req, res) {
    console.info("Hello server...");
    res.sendFile(path.join(__dirname + '/client/my.js'));
});

app.get('/mackBook', function (req, res) {
    res.send('mackBook!')
});

app.listen(port, function () {
    console.log('Listening on port ', port)
});