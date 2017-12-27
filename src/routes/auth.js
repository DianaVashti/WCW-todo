var express = require('express');

var router = express.Router();

router.get( '/sign-up', (req, res) => res.render('auth/sign-up') )
router.get( '/sign-in', (req, res) =>res.render('auth/sign-in') )

module.exports = router
