"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var cors = require('cors');
var usersRoute = require('./routes/users');
var app = express();
var port = process.env.PORT || '3001';
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use('/api/users', usersRoute);
app.use(function (req, res) {
    res.status(404);
    res.send('error 404');
});
app.use(function (err, req, res, next) {
    res.status(500);
    console.log("ERROR: " + err);
    res.send("ERROR 500: " + err);
});
app.listen(port, function () {
    console.log("Express server started on " + port);
});
