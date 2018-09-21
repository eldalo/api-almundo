'use strict'

const Mongoose = require('mongoose');
const config = require('../../config/environment');

class Db {

    init() {
        try {
            return this.connection(config.db);
        } catch(err) {
            console.error(`Error Db: ${err}`);
        }
    }

    connection(uri, options = {}) {
        Mongoose.set('useCreateIndex', true);
        Mongoose.set('useNewUrlParser', true);

        return Mongoose.connect(uri, options)
                .then(() => {
                    console.log(`Mongoose connection to ${uri}`);
                    Mongoose.set('debug', (collectionName, method, query, doc) => {
                        console.log(`Query: ${collectionName}.${method}`, query);
                    });
                })
                .catch((err) => {
                    console.log('Mongoose failed to connect to MongoDB.');
                    console.error('Mongoose connection error: ', err);
                    process.exit(0);
                });
    }    
}

module.exports = new Db();
