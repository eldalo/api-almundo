'use strict'

require('dotenv').config();

const compression = require('compression');
const express = require('express');
const cluster = require('cluster');
const bodyParser = require('body-parser');
const config = require('./config/environment');

const Routes = require('./src/routes');
const Db = require('./src/services/Db');

const app = express();

app.disable('x-powered-by');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());

function startApp() {
    Db.init();
    Routes.init(app);

    app.listen(config.port, () => {
        console.log(`Server environment: ${config.environment}`)
        console.log(`API RESTful listening on port http://localhost:${config.port}`);
    });
}

if (config.environment === 'production') {
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
