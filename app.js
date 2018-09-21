'use strict'

const express = require('express');
const cluster = require('cluster');
const bodyParser = require('body-parser');
const config = require('./config/environment');

const Routes = require('./src/routes');
const Database = require('./src/services/Database');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     next();
// });

function startApp() {
    Database.init();
    Routes.init(app);

    app.listen(config.port, () => {
        console.log(`API RESTful - Listening on port ${config.port}`);
    });
}

if (process.env.NODE_ENV === 'production') {
    if (cluster.isMaster) {
        cluster.fork();
        cluster.on('exit', (worker, code, signal) => {
            cluster.fork();
        });
    }

    if (cluster.isWorker)
        startApp();
} else 
    startApp();
