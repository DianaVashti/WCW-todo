var express = require('express');
var router = express.Router();
const {Querries} = require('../database/db.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});

router.post('/add', function(req, res, next) {
  // add your code here
})

router.get('/complete/:id', function(req, res, next){
  // add your code here
})

module.exports = router;
