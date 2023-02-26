require('dotenv').config();

const express = require('express');
const logger = require('./backend/logger');
const path = require('path');

const expressLogger = (req, res, next) => {
    logger.info(`[${req.method}] ${req.hostname} ${req.baseUrl} ${req.url}`);
    next();
};

const app = express()
    .use(expressLogger)
    .use('/api', require('./backend/api')())
    .get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')))
    .use(express.static(path.join(__dirname, './public')))
    ;

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
    console.log('Server listening on port', PORT);
});
