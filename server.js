const express = require('express');
const http = require('http')
const path = require('path');

const app = express();

const port = process.env.PORT || 8080

app.use(express.static(__dirname + '/dist/rw-punk-challenge'));

app.get('/*', (req,res) => res.sendFile(path.join(__dirname + "/dist/rw-punk-challenge/index.html")))

const server = http.createServer(app)

server.listen(port, () => console.log('Server Running'));
