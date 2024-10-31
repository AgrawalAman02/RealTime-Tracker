const express = require("express");
require('dotenv').config();
const app = express();
const http = require("http");
const socket = require("socket.io");
const path = require("path");

const server = http.createServer(app);
const io = socket(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));

io.on("connection",(socket)=>{
    socket.on("send-Location",(location)=>{
        io.emit("receive-Location",{id: socket.id, ...location});
    });
    socket.on("disconnect",()=>{
        io.emit("user-disconnect",socket.id);
    });
    console.log("User connected");
});


app.get("/",(req,res)=>{
    res.render("index");
})

const PORT = process.env.PORT || 7777;
server.listen(PORT, () => {
    console.clear();
    console.log(`Server is listening on port ${PORT}...`);
});