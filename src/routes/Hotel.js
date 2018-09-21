'use strict'

const express = require('express');
const router = new express.Router();

const HotelController = require('../controllers/HotelController');

router.get('/api/hotels', HotelController.getHotelAll);
router.get('/api/hotels/:id', HotelController.getHotelById);

module.exports = router;
