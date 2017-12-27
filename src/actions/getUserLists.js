const db = require('../database/db')

const sql = `
  SELECT (list.id, list.title) FROM list
  JOIN list_user ON list.id = list_user.list_id
  JOIN users ON users.id = list_user.user_id
  WHERE users.id = ($1)
`

export default function getUserLists(userId) {
  return db.any(sql, [userId])
}
