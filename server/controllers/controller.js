const Book = require('../models/model');

let fetch = require('fetch').fetchUrl;

let coins = null;

let currency = null;

exports.getCoins = async (req, res) => {
  if (coins) {
    console.log('coins already fetched');
    res.json(coins);
  } else {
    fetch(
      'https://api.coingecko.com/api/v3/coins/list',
      function (error, meta, body) {
        if (error) {
          console.log(error);
        } else {
          coins = JSON.parse(body);
          res.json(coins);
        }
      },
    );
  }
};
exports.getCurrency = async (req, res) => {
  if (currency) {
    console.log('currency already fetched');
    res.json(currency);
  } else {
    fetch(
      'https://api.coingecko.com/api/v3/simple/supported_vs_currencies',
      function (error, meta, body) {
        if (error) {
          console.log(error);
        } else {
          currency = JSON.parse(body);
          res.json(currency);
        }
      },
    );
  }
};

exports.addWatchlist = async (req, res) => {};
