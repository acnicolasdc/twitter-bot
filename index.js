const express = require("express");
const { environment: { PORT } } = require("./config")
const { HomeRoutes } = require("./routes")
const server = express();

//Using middleware to make a private folder to public
server.use(express.static('./public'));
//Using middleware to parse request to JSON
server.use(express.json());
//Using routes
server.use("/", HomeRoutes);

server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))