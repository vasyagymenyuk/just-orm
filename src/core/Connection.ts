import pg from 'pg'
import { PoolConfig } from 'pg'
import { IConnectionSettings, ModelsDefinition } from '../interfaces/connection.js'
import { IPlainObject } from '../interfaces/model.js'

export class Connection {
  private connectOptions: PoolConfig = {}
  public nativePool: pg.Pool
  public models: IPlainObject = {}

  constructor(options: IConnectionSettings) {
    this.connectOptions.host = options.host
    this.connectOptions.port = options.port
    this.connectOptions.database = options.database
    this.connectOptions.user = options.user
    this.connectOptions.password = options.password

    this.nativePool = this.getPool()
    this.models = this.serializeModels(options.models)
  }

  private getPool() {
    return new pg.Pool(this.connectOptions)
  }

  private serializeModels(models: ModelsDefinition): object {
    if (!models) return {}

    if (typeof models === 'string') return this.getModelsFromDirectory(models)
    if (Array.isArray(models)) return this.getModelsWithConnection(models)

    return {}
  }

  private getModelsFromDirectory(models: string) {
    return {}
  }

  private getModelsWithConnection(models: Array<any>) {
    const modelsWithConnection: any = {}

    for (const model of models) {
      model.connectionPool = this.nativePool
      modelsWithConnection[model.name] = model
    }

    return modelsWithConnection
  }

  async query(query: string, raw = false): Promise<any> {
    if (raw) {
      return (await this.nativePool.query(query)).rows
    } else {
      return await this.nativePool.query(query)
    }
  }
}
