const db = require('../database/db')

const sql = `SELECT id, list_id, title, description, is_completed FROM item
             WHERE list_id = ($1)
             AND is_completed = FALSE`

export default function getListItemsByListId(listId){
  return db.any(sql, [listId])
}
