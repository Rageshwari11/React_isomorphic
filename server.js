const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT||9800;
const http = require('http');

app.use(express.static(path.join(__dirname,'build')));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'build/index.html'))
});

app.set('port',port);
const server = http.createServer(app);
server.listen(port);