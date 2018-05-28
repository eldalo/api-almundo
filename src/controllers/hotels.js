'use strict'
const DATAHOTELS = './public/data/hotels.json';

const fs = require('fs');
const _ = require('underscore');

function getHotelsAllAction(req, res) {
    fs.readFile(DATAHOTELS, 'utf8', (err, data) => {
        if (err) throw err;

        const hotels = JSON.parse(data);
        res.status(200).send(hotels);
    });
}

function getHotelsByIdAction(req, res) {
    const id = parseInt(req.params.id);

    fs.readFile(DATAHOTELS, 'utf8', (err, data) => {
        if (err) throw err;
        let hotels = JSON.parse(data);

        hotels = _.filter(hotels, (hotel) => {
            return parseInt(hotel.id) === id;
        });

        res.status(200).send(hotels);
    });
}

function getHotelSearchAction(req, res) {
    const name = req.query.name;
    const stars = req.query.stars;

    fs.readFile(DATAHOTELS, 'utf8', (err, data) => {
        if (err) throw err;
        let hotels = JSON.parse(data);

        if (stars) {
            stars = stars.split(',');
            if (stars.length > 0) {
                hotels = _.filter(hotels, function (hotel) {
                    return stars.indexOf(hotel.stars.toString()) != -1;
                });
            }
        }

        if (name) {
            hotels = _.filter(hotels, (hotel) => {
                return hotel.name.toLowerCase().includes(name.toLowerCase());
            });
        }

        res.status(200).send(hotels);
    });
}

module.exports = { getHotelsAllAction, getHotelsByIdAction, getHotelSearchAction }
