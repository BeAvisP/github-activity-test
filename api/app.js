require('dotenv').config();
const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');

//DB Configuration
require('./configs/db.config');

const app = express();

// Middleware Setup
require('./configs/middleware.config')(app);
require('./configs/cors.config')(app);

// Initialize sanitize
app.use(mongoSanitize());

// Catch 404 and respond with error message
app.use((req, res, next) => res.status(404).json({ message: 'Not found' }));

module.exports = app;
