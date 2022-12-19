import pg from 'pg'
import { PoolConfig } from 'pg'
import { IConnectionOptions } from '../interfaces/connection.js'

export class Connection {
  host?: string
  port?: number
  database?: string
  user?: string
  password?: string | any

  pool: pg.Pool

  constructor(options: PoolConfig | IConnectionOptions) {
    this.host = options.host
    this.port = options.port
    this.database = options.database
    this.user = options.user
    this.password = options.password

    this.pool = new pg.Pool({
      host: this.host,
      port: this.port,
      database: this.database,
      user: this.user,
      password: this.password,
    })
  }

  async query(query: string, raw = false) {
    if (raw) {
      return (await this.pool.query(query)).rows
    } else {
      return await this.pool.query(query)
    }
  }
}
