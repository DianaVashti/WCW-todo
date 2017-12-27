var express = require('express');

var users = require('./users')

var router = express.Router();
const {Querries} = require('../database/db.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  // write auth funx and only go home if no session active-user
  res.render('partials/home')
});

module.exports = router;
