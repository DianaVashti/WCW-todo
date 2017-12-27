var express = require('express');

import users from './users'
import auth from './auth'

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // write auth funx and only go home if no session active-user
  res.render('partials/home')
});

router.use('/auth', auth)

module.exports = router;
