const {WebSocketServer } = require("ws")
const dotenv = require("dotenv")

const wss = new WebSocketServert({port: process.env.PORT })