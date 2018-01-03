const db = require('../database/db')

const sql = `UPDATE item
             SET is_completed = TRUE
             WHERE id = $1`

export default function completeListItemByItemId(itemId){
  return db.none(sql, [itemId])
}
