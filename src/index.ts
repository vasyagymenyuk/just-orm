import { runServer } from './modules/run_server.js'
import { IServerOptions } from './interfaces/server.js'

const serverOptions: IServerOptions = { port: 7005 }

const message = serverOptions.host

runServer(serverOptions)
