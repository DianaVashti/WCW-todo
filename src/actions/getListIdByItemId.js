const db = require('../database/db')

const sql = `SELECT * FROM item
             WHERE id = $1`

export default function getListIdByItemId(itemId){
  return db.one(sql, [itemId])
}
