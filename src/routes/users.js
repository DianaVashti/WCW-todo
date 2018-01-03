const express = require('express');

import getUserListsByUserId from '../actions/getUserListsByUserId';
import getListItemsByListId from '../actions/getListItemsByListId';
import completeListItemByItemId from '../actions/completeListItemByItemId';
import getListIdByItemId from '../actions/getListIdByItemId'

const router = express.Router();

router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  getUserListsByUserId(id)
  .then( (userLists) => {
    res.render('users/profile', {userLists})
  })
  .catch(next);
});

router.get('/lists/:id', (req, res, next) => {
  const listId = req.params.id;

  getListItemsByListId(listId)
  .then( items => {
    res.render('todos/list', {items})
  })
  .catch(next);
});

router.get('/lists/:itemId/complete', (req, res, next) => {
  const itemId = req.params.itemId;

  completeListItemByItemId(itemId)
  .then(() => {
    getListIdByItemId(itemId)
    .then( data => {
      res.redirect('/users/lists/'+data.id)
    })
  })
  .catch(next);
})

export default router
