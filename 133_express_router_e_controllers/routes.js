const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contactController = require('./controllers/contactController');

/* home routes */
route.get('/', homeController.homePage);
route.post('/', homeController.treatPost);

/* contact routes */
route.get('/contato', contactController.homePage);

module.exports = route;