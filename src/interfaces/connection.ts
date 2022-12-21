import { PoolConfig } from 'pg'

export type ModelsDefinition = Array<any> | string | undefined

export interface IConnectionSettings extends PoolConfig {
  models?: ModelsDefinition
}
