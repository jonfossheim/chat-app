const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 3030});

wss.on('connection', connection = (ws) => {
    ws.on('message', incoming = (data) => {
        wss.clients.forEach(each = (client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data)
            }
        })
    })
});