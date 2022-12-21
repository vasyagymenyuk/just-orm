import { IModelColumns, IModelCreateOptions, IQueryOptions } from '../interfaces/model.js'
import { Pool } from 'pg'

export class Model {
  public static columns: IModelColumns
  public static options: IModelCreateOptions
  public static connectionPool: Pool

  static define(columns: IModelColumns, options: IModelCreateOptions) {
    this.columns = columns
    this.options = options

    if (options.connectionPool) {
      this.connectionPool = options.connectionPool
    }
  }

  static async selectAll(queryOptions?: IQueryOptions) {
    const expression = `SELECT * from "${this.options.tableName}"`

    if (queryOptions?.raw) {
      return (await this.connectionPool.query(expression)).rows
    } else {
      return await this.connectionPool.query(expression)
    }
  }
}
