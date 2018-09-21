'use strict'

const divide = require('lodash.divide');
const _ = require('underscore');

module.exports = function(data) {
    if (_.isUndefined(data.page))
        throw new Error('Param page is required, current page for data.');

    if (_.isUndefined(data.count))
        throw new Error('Param count is required, total items in data');

    if (_.isUndefined(data.limit))
        throw new Error('Param limit is required, current limit for data.');

    if (_.isUndefined(data.current))
        throw new Error('Param current is required, current length of data.');

    data.page++;

    const lastPage = Math.ceil(divide(data.count, data.limit));

    return {
        total: data.count,
        showing: data.current,
        page: data.page,
        per_page: data.limit,
        first_page: 1,
        last_page: lastPage,
        prev_page: (data.page === 1) ? 1 : (data.page -1),
        next_page: ((data.page + 1) > lastPage) ? data.page : data.page +1
    }
}
