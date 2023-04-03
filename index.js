// const WebSocket = require('ws')

// const server = new WebSocket.Server({ port: 3000 })

// server.on('connection', ws => {
//     console.log('New client connected')
//     ws.on('message', message => {
//         server.clients.forEach(client => {
//             if(client.readyState === WebSocket.OPEN) {
//                 client.send(JSON.stringify(message))
//             }
//         })
//     })
// })

const express = require('express')

let app = express()

app.get('/', (req, res) => {
    res.end('hi')
})

app.listen(3000, () => {
    console.log('server')
})