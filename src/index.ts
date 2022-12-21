import * as dotenv from 'dotenv'
dotenv.config()
import { Connection } from './core/Connection.js'
import { User, Book } from './use.js'

export const connection = new Connection({
  host: process.env.DB_HOST || 'localhost',
  port: +(<string>process.env.DB_PORT) || 5432,
  database: process.env.DB_DATABASE || 'database',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  models: [User, Book],
})

const models = connection.models

models.User.selectAll().then((res: any) => {
  console.log(res)
})

models.Book.selectAll().then((res: any) => {
  console.log(res)
})
