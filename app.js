const express = require('express');
var http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
var compression = require('compression');
app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', function (a, b) {
    b.sendFile(path.join(__dirname + '/build/index.html'));
});
http.createServer(app).listen(5000, function () {
    console.log("server started running on 5000");
});