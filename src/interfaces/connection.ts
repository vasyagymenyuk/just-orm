import { PoolConfig } from 'pg'

export interface IConnectionOptions extends PoolConfig {
  modelsDir?: string
}
