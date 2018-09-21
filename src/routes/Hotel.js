'use strict'

const express = require('express');
const router = new express.Router();

const HotelController = require('../controllers/HotelController');

router.get('/hotels', HotelController.index);

module.exports = router;
