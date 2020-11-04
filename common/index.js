const express = require("express");
const fs = require('fs');
const html = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
const PORT  = 8080;
const server = express();


server.get('/', (req, res)=>{
    res.write(html);
})

server.get('/about', (req, res)=>{
    res.write(about);
})
server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))