
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const  User  = require('./users');
const Post  = require('./posts')

// connect to the database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// create connection object
const db = mongoose.connection;

// once the database opens
db.once('open', () => {
  console.log('Connected to MongoDB Database: Mongoose App at HOST: ', db.host, 'PORT: ', db.port);
});

// if there is a database error
db.on('error', (err) => {
  console.log(`Database error: `, err);
});

module.exports = {User,Post}