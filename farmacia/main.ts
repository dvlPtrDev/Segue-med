import Server from "./src/Server";

const svr = new Server({
    debug: false,
    port: 5002
})
svr.startServer()
