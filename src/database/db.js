const databaseName = 'todoz'
const connectionString = process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost:5432/${databaseName}`
const pgp = require('pg-promise')();
const db = pgp( connectionString );

const addTodo = `INSERT INTO todoz (item) VALUES($1)`
const completeTodo = `UPDATE todoz SET is_completed = TRUE WHERE id=$1`
const getAllTodoz = `SELECT * FROM todoz WHERE is_completed=FALSE`

const Querries = {
  add: item => db.none(addTodo, [item]),
  complete: id => db.none(completeTodo, [id]),
  getAll: () => db.any(getAllTodoz)
}

module.exports = { Querries }
