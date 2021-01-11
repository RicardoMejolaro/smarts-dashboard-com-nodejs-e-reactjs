const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');

const server = express();
server.use(express.urlencoded({ extended: true}));
server.use(express.json());
server.use(cors());
server.use(routes);

server.listen(5000, () => {
  console.log("server is running!");
})