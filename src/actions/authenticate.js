const db = require('../database/db')

const sql = `SELECT * FROM users
             WHERE username = $1
             AND password = $2`

export default function authenticate(username, password){
  return db.oneOrNone(sql, [username, password]);
}
