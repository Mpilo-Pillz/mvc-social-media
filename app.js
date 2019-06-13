//jshint esversion:6
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const ejs = require('ejs');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended:true }));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, function(){
    console.log("Social media app started on port 3000");
});