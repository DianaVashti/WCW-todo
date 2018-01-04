var express = require('express');

import getAllTodozForAjaxDemo from '../actions/getAllTodozForAjaxDemo';

var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('ajax/ajax')
})

router.get('/get-all', (req, res, next) => {
  getAllTodozForAjaxDemo()
  .then(data => res.json({todoz: data}))
})



module.exports = router
