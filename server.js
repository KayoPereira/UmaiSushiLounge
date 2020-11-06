const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})
server.use(express.static(__dirname + '/views'));
server.use(express.static(__dirname + '/public/'));

server.listen(8080)