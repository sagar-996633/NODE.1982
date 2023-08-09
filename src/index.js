const express = require("express");
const http = require("http");
const { connectDB } = require("./db/dbConnection");
const config = require("./Config/config");

// const app = express()
// app.listen(8080);

http.createServer(function(req, res){
    res.write('sagar');
    res.end();
}).listen(8080);