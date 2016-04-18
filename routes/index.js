"use strict";

exports.helloWorld = function (req, res) {
    res.send("Hello, dear world!");
};

exports.helloStranger = function (req, res) {
    res.send("Hello " + req.params.name + "!");
};

exports.whoIsCool = function (req, res) {
    let ppl = [
        {name: "You", isCool: true},
        {name: "Your neighbour", isCool: false}
    ];

    res.json(ppl);
};

exports.downloadDemo = function (req, res) {
    var path = require('path');
    res.download(path.join(__dirname, '..', 'downloads', 'test100k.db'));
};

exports.redirectDemo = function (req, res) {
    res.redirect('/index.html', 301);
};

exports.postDemo = function (req, res) {
    res.send("Hello from POST, " + req.body.name + "!");
};