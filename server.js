const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4000; 
const log = console.log

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('/home/site/wwwroot'));

app.get("/api", function(request, response) {
    log("GET /api");
    response.send("Hello world!");
});

app.get('*', function(request, response) {
    log("GET *");
    response.sendFile(express.static(__dirname + 'client/public/index.html'));
});

app.listen(PORT, () => {
    log("Server is running on Port: " + PORT)
})