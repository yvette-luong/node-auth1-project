const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const session = require ('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const server = express() //define the server

// server.use(session(sessionConfig));
server.use(helmet());
server.use(express.json())
server.use(cors());

server.get('/', (req,res) =>{
    res.status(200).json({notification: "Intro to Authorization - Node-auth1-project"})
})

module.exports = server;