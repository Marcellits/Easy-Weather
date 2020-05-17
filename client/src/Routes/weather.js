const express = require('express')
const axios = require('axios');
const router = express.Router();
router.get('/city/:city', async (req, res) => {
    // key=${process.env.API_KEY}
    let { data } = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${req.params.city}&days=3`);
    res.send(data);
});
router.get('/zip/:zipCode', async (req, res) => {
    // key=${process.env.API_KEY}
    let { data } = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${req.params.zipCode}&days=3`);
    res.send(data);
});
module.exports = router;