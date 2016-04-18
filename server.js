"use strict";

// Load dependencies.
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Include routes file.
var routes = require('./routes');

// This adds HTTP logging capabilities.
app.use(morgan('dev'));

// This allows serving static files.
app.use(express.static(path.join(__dirname, '/public')));

// This allows parsing data sent using POST.
app.use(bodyParser.urlencoded({extended: true}));

// Set up routes.
app.get('/hello', routes.helloWorld);
app.get('/hello/:name', routes.helloStranger);
app.get('/whoiscool', routes.whoIsCool);
app.get('/download', routes.downloadDemo);
app.get('/redirect', routes.redirectDemo);
app.post('/hellopost', routes.postDemo);

// Launch the server.
app.listen(process.env.PORT, function() {
    console.log("App listening on port " + process.env.PORT);
});

