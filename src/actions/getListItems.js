const db = require('../database/db')

const sql = `
  SELECT (id, list_id, title, description, is_completed)
  FROM item
  WHERE list_id = ($1)
`

export default function getListItems(listId){
  return db.any(sql, [listId])
}
