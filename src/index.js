// const express = require("express")
// const app = express()
// app.listen(8080);

var http = require("http")
http.createServer(function(req, res){
    res.write('sagar');
    res.end();
}).listen(8080);