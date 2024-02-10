const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller');

router.get('/coins', controller.getCoins);
router.get('/currency', controller.getCurrency);
router.post('/watchlist', controller.addWatchlist);

module.exports = router;
