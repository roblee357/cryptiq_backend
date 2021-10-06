require('dotenv').config();
const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();

const options = {
  // key: fs.readFileSync('key.pem'),
  // cert: fs.readFileSync('cert.pem')
};

const admin = require('firebase-admin');
const firebaseApp = admin.initializeApp();

// const server = https.createServer(options,app);
// const { Server } = require("socket.io");
// const io = new Server(server);

app.use('/api/v1', require('./routes/examples'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen('8080');
console.log('app is listening on port 8080');

// io.on('connection', (socket) => {
//   socket.on('chat message', (msg) => {
//     console.log('message: ' + msg);
//   });
// });

// server.listen(443, () => {
//   console.log('listening on *:443');
// });