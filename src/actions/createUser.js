const db = require('../database/db')

const sql = `
  INSERT INTO users(username, password)
  VALUES($1, $2)
`

export default function createUser(username, password){
  return db.none(sql, [username, password])
}
