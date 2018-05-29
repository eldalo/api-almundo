'use strict'
const DATAHOTELS = './public/data/hotels.json';

const fs = require('fs');
const _ = require('underscore');

function getHotelsAllAction(req, res) {
    fs.readFile(DATAHOTELS, 'utf8', (err, data) => {
        if (err) res.status(400).send(err);

        const hotels = JSON.parse(data);
        res.status(200).send(hotels);
    });
}

function getHotelsByIdAction(req, res) {
    const hotelId = req.params.id.toString();

    fs.readFile(DATAHOTELS, 'utf8', (err, data) => {
        if (err) res.status(400).send(err);

        let hotels = JSON.parse(data);
        hotels = _.where(hotels, { id: hotelId });

        res.status(200).send(hotels);
    });
}

function getHotelFilterAction(req, res) {
    const name = req.query.name.toLowerCase();
    const stars = req.query.stars;

    fs.readFile(DATAHOTELS, 'utf8', (err, data) => {
        if (err) res.status(400).send(err);
        
        let hotels = JSON.parse(data);

        if (stars) {
            stars = stars.split(',');
            if (stars.length > 0) {
                hotels = _.filter(hotels, (hotel) => {
                    return stars.indexOf(hotel.stars.toString()) != -1;
                });
            }
        }

        if (name) {
            hotels = _.filter(hotels, (hotel) => {
                return hotel.name.toLowerCase().includes(name);
            });
        }

        res.status(200).send(hotels);
    });
}

module.exports = { getHotelsAllAction, getHotelsByIdAction, getHotelFilterAction }
