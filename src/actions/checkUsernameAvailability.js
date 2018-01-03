const db = require('../database/db')

const sql = `SELECT id, username FROM users
             WHERE username = $1`

export default function checkUsernameAvailability(username){
  return db.oneOrNone(sql, [username]);
}
