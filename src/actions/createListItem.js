const db = require('../database/db')

const sql = `INSERT INTO item(list_id, title, description, created_at)
             VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
             RETURNING *`

export default function createListItem(list_id, title, description){
  return db.one(sql, [list_id, title, description])
}
