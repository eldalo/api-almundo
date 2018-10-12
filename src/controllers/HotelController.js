'use strict'

const Hotel = require('../models/Hotel');
const Pagination = require('../services/Pagination');

class HotelController {

    async getHotelAll(req, res) {
        try {
            let { page, limit, name, stars } = req.query;
            const finder = {};

            page = (Number(page) - 1) || 0;
            limit = Number(limit) || 10;

            if (name)
                finder.name = new RegExp(name, 'ig');

            if (stars)
                finder.stars = Number(stars);

            const hotels = await Hotel.find(finder).skip(page * limit).limit(limit);
            const total = await Hotel.countDocuments(finder);

            return res.status(200).json({
                hotels,
                paginate: Pagination({
                    page,
                    limit,
                    current: hotels.length,
                    count: total
                })
            });   
        } catch (error) {
            return res.status(400).send(`Err: ${error}`);
        }
    }

    async getHotelById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const finder = {};
    
            finder.id = id;
    
            const hotels = await Hotel.find(finder);
            return res.status(200).json({ hotels });
        } catch (error) {
            return res.status(400).send(`Err: ${error}`);
        }
    }
}

module.exports = new HotelController();
