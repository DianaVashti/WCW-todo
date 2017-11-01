const databaseName = 'todoz'
const connectionString = process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost:5432/${databaseName}`
const pgp = require('pg-promise')();
const db = pgp( connectionString );

const addTodo = "Insert SQL Statement"
const completeTodo = "Insert SQL Statement"
const getAllTodoz = "Insert SQL Statement"

const Querries = {
  // add methods here
}

module.exports = { Querries }
