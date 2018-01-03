const db = require('../database/db')

const sql = `SELECT id, title FROM list
             WHERE user_id = ($1)`

export default function getUserListsByUserId(userId) {
  return db.any(sql, [userId])
}
