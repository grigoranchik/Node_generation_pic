let express = require('express');
var Jimp = require("jimp");
let path = require('path');
let fs = require('fs');
let ejs = require('ejs');
let app = express();

let port = 8080;

app.set('views', path.join(__dirname,'src'));
app.set('view engine', 'ejs');

app.get('/:id', function(req, res) {

    res.render('hello');
    //res.send(req.params.id);
    /*
    res.render('hello', { name: req.params.id }, function(err, html) {
        // ...
    });
    res.send({ user: 'tobi' });
    res.render('index', {title: 'res vs app render'})
    */


});

app.get('/get/image', function(req, res) {

    //res.send('src/pic.png');
    res.sendfile(__dirname + '/src/pic.png');

});


/*
Jimp.read("src/pic.png").then(function (image) {
    // do stuff with the image
}).catch(function (err) {
    // handle an exception
});

Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
    image.print(font, 10, 10, "Hello world!");
});
*/

app.listen(port, function () {
    console.log('Listening on port ', port)
});
