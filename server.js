const express = require("express");
const path = require("path");
const app = express();


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
})

app.post("/first", (req, res) => {
    res.sendFile(path.join(__dirname + "/first.html"));
})

app.post("/second", (req, res) => {
    res.sendFile(path.join(__dirname + "/second.html"));
})

app.post("/third", (req, res) => {
    res.sendFile(path.join(__dirname + "/third.html"));
})

app.post("/fourth", (req, res) => {
    res.sendFile(path.join(__dirname + "/fourth.html"));
})
const server = app.listen(5000);
const portNumber = server.address().port;
console.log(`port is open on ${portNumber}`);