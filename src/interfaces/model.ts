import { Pool } from 'pg'

export interface IQueryOptions {
  where?: {
    [key: string]: any
  }
  raw?: boolean
}

export interface IPlainObject {
  [key: string]: any
}

export interface IModelCreateOptions {
  tableName: string
  connectionPool?: Pool
}

export interface IModelColumns {
  [key: string]: {
    dataType?: string
    required?: boolean
  }
}
