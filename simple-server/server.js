
const express = require('express')
const server = express()

server.use(require('cors')({
	preflightContinue: true,
	credentials: true,
	origin: [
        "http://localhost:3000",
		process.env.CLIENT_URL,
		
	],
	allowedHeaders: ["Origin",'Content-Type', 'Authorization'],
	methods:['GET', 'PUT', 'POST','DELETE','OPTIONS','HEAD']
}))
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({message: "The little server is working."})
})

module.exports = server;