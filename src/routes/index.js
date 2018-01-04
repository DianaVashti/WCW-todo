var express = require('express');

import auth from './auth'
import users from './users'
import ajax from './ajax'

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('partials/home')
});

router.use('/auth', auth)
router.use('/users', users)
router.use('/ajax', ajax)

module.exports = router;
