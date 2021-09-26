const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(options,app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  
  io.on('connection', (socket) => {
      socket.on('chat message', (msg) => {
          console.log('message: ' + msg);
        });
  });
  
  server.listen(8000, () => {
    console.log('listening on *:8000');
  });

// function (req, res) {
//     res.writeHead(200);
//     res.end("hello world\n");
//   }