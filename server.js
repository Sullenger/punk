const express = require('express');
const http = require('http')
const path = require('path');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "/dist/rw-punk-challenge")));
app.use("/", express.static(path.join(__dirname, "/dist/rw-punk-challenge")));

http.createServer(app).listen(port, function() {
  console.log(`Application started and listing on port: ${port}`);
});
