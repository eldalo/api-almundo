'use strict'

const cors = require('cors');
const HotelRouter = require('./routes/Hotel');

module.exports = {
    init: (app) => {
        app.use(HotelRouter);
        app.use(cors);
    }
}
