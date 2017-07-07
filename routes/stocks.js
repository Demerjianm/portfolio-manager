const express = require('express');
const request = require('request');
const router = express.Router();
const bodyParser = require('body-parser');
const moment = require('moment')
var http = require('http')
const currentDate = moment().format('YYYY-MM-27');
const aapl = {
  url: 'https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json?start_date='+ currentDate + '&end_date=' + currentDate + '&limit=1&api_key=kWajJw745FMRMwSyGzNH',
  headers: {  'Accept': 'application/json' }
}
const chkp = {
  url: 'https://www.quandl.com/api/v3/datasets/WIKI/CHKP.json?start_date='+ currentDate + '&end_date=' + currentDate + '&limit=1&api_key=kWajJw745FMRMwSyGzNH',
  headers: {  'Accept': 'application/json' }
}



router.get('/aapl', (req, res) => {
  request.get(aapl, function(err, response, body) {
    let info = JSON.parse(body)
    return res.json(info.dataset.data[0][4])
  })
});

  // request.get(chkp, function(err, res, body) {
  //   let info = JSON.parse(body)
  //   console.log(info.dataset.data[0][4])
  // })




module.exports = router;
