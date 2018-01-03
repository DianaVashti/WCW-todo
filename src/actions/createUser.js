const db = require('../database/db')

const sql = `INSERT INTO users(username, password) VALUES($1, $2) RETURNING *`

export default function createUser(username, password){
  return db.one(sql, [username, password])
}
