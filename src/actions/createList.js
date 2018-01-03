const db = require('../database/db')

const sql = `INSERT INTO list(title, user_id)
             VALUES ($1, $2)`

export default function createList(title, userId){
  return db.none(sql, [title, userId])
}
