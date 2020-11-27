'use strict';
const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

require('./socket.js')(io);

app.use(express.static(path.join(__dirname, 'public')));

http.listen(port, () => {
  console.log('app escuchando en el puerto 3000');
});