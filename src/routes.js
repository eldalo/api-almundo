'use strict'

const express = require('express');
const api = express.Router();
const hotelsController = require('./controllers/hotels');

api.get('/hotels', hotelsController.getHotelsAllAction);
api.get('/hotels/:id', hotelsController.getHotelsByIdAction);
api.get('/hotels/serch', hotelsController.getHotelSearchAction);

module.exports = api;
