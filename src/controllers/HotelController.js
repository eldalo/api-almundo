'use strict'

const Hotel = require('../models/Hotel');
const Pagination = require('../services/Pagination');

class HotelController {

    async index(req, res) {
        let { page, limit, name, stars } = req.query;
        const finder = {};

        page = (Number(page) -1) || 0;
        limit = Number(limit) || 10;

        if (name)
            finder.name = new RegExp(name, 'ig');

        if (stars)
            finder.stars = Number(stars);

        const hotels = await Hotel.find(finder).skip(page * limit).limit(limit);
        const total = await Hotel.countDocuments(finder);

        return res.json({
            hotels,
            paginate: Pagination({
                page,
                limit,
                current: hotels.length,
                count: total
            })
        })

    }
}

module.exports = new HotelController();
