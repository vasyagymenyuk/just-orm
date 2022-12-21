import { Model } from './core/Model.js'

export class User extends Model {}

User.define(
  {
    name: {
      dataType: 'string',
      required: true,
    },
    age: {
      dataType: 'number',
      required: true,
    },
  },
  {
    tableName: 'users',
  },
)

export class Book extends Model {}

Book.define(
  {
    title: {
      dataType: 'string',
      required: true,
    },
    pages: {
      dataType: 'number',
      required: true,
    },
  },
  {
    tableName: 'books',
  },
)
