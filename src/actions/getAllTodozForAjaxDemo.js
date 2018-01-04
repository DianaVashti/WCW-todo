const db = require('../database/db')

const sql = `SELECT * FROM item
             WHERE list_id = 1`

export default function getAllTodozForAjaxDemo(){
  return db.any(sql)
}
