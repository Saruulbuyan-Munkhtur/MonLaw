var express = require('express')
var path = require('path');
var app = express();


app.get("/")

app.use('/static', express.static(path.join(__dirname, '/src'))) //__dir and not _dir
var port = 3000; // you can use any port
app.listen(port);
console.log('server on ' + port); 
console.log('http://localhost:3000/')


