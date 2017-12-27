const db = require('../database/db')

const sql = `
  INSERT INTO list(title)
  VALUES ($1)
`

export default function createList(title){
  db.none(sql, [title])
}
