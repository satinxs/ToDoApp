const { Router } = require('express');

module.exports = () => {
    const api = Router();

    api.use(require('body-parser').json());

    api.get('/todos', async (req, res) => {
        res.send([
            'hello'
        ]);
    });

    return api;
};