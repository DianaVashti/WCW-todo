var express = require('express');

var router = express.Router();

import authenticate from '../actions/authenticate';
import createUser from '../actions/createUser';
import checkUsernameAvailability from '../actions/checkUsernameAvailability'

router.get( '/sign-up', (req, res) => res.render('auth/sign-up') );

router.post( '/sign-up', (req, res, next) => {
  const data = req.body;

  checkUsernameAvailability(req.body.username)
  .then((available) => {
    if(available !== null){
      console.log("Username already exists in db")
      res.redirect('/auth/sign-in')
    } else {
      console.log("created new user");
      createUser(data.username, data.password)
      .then((userData) => {
        res.redirect('/users/'+userData.id);
      })
    }
  })
  .catch(next);
});


router.get( '/sign-in', (req, res) =>res.render('auth/sign-in') );

router.post( '/sign-in', (req, res, next) => {
  const data = req.body;
  authenticate(data.username, data.password)
  .then((user) => {
    if(user !== null){
      res.redirect('/users/'+user.id)
    } else {
      console.log("*** Username and/or Password are incorrect ***");
      res.redirect('/auth/sign-in')
    }
  })
  .catch(next);
});


module.exports = router
