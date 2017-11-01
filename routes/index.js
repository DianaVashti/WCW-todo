var express = require('express');
var router = express.Router();
const {Querries} = require('../database/db.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  Querries.getAll()
  .then( todoz => {
    res.render('index', {todoz})
  })
});

router.post('/add', function(req, res, next) {
  Querries.add(req.body.item)
  .then( () => {
    res.redirect('/')
  })
})

router.get('/complete/:id', function(req, res, next){
  Querries.complete(req.params.id)
  .then( () => {
    res.redirect('/')
  })
})

module.exports = router;
