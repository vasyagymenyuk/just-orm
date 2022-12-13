import {IServerOptions} from "../interfaces/server.js";

export function runServer(options:IServerOptions){
    options.port ||= 5000
    options.host ||= 'localhost'

    console.log(`Server is listening to http://${options.host}:${options.port}`)
}