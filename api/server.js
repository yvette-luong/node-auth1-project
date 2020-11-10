const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
// const session = require ('express-session');
const authRouter = require('../auth/authRouter');
const usersRouter = require("../users/usersRouter");

// const KnexSessionStore = require('connect-session-knex')(session);

const server = express() //define the server

// server.use(session(sessionConfig));
server.use(helmet());
server.use(express.json())
server.use(cors());

server.use('/auth', authRouter);
server.use('/users', usersRouter)

server.get('/', (req,res) =>{
    res.status(200).json({APInotification: "Intro to Authorization - Node Auth 1st project"})
})

module.exports = server;