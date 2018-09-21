'use strict'

const divide = require('lodash.divide');

module.exports = function(data) {
    try {
        const params = ['page', 'count', 'limit', 'current'];

        for (let param in params) if (data.hasOwnProperty(param)) {
            throw new Error(data[param]);
        }

        data.page++;

        const lastPage = Math.ceil(divide(data.count, data.limit));

        return {
            total: data.count,
            showing: data.current,
            page: data.page,
            per_page: data.limit,
            first_page: 1,
            last_page: lastPage,
            prev_page: (data.page === 1) ? 1 : (data.page - 1),
            next_page: ((data.page + 1) > lastPage) ? data.page : data.page + 1
        }
    } catch (err) {
        console.error(`Error pagination: ${err}`);
    }
}
