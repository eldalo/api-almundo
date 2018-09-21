'use strict'

const cors = require('cors');
const HotelRouter = require('./routes/Hotel');

module.exports = {
    init: (app) => {
        app.use(HotelRouter);
        app.use(cors);

        app.get('/*', notFound);
        app.post('/*', notFound);
    }
}

function notFound(req, res) {
    return res.status(404).json({
        error: true,
        message: 'This API does not exist'
    });
}
