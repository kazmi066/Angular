const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

// File Paths Modules
const config = require('./db');
const routes = require('./routes/memberRoute');

// Main App
const app = express();


// PORT definition
let port = process.env.port || '4000';


// Middlewares
app.use(bodyparser.json());
app.use('/members',routes);
app.use(cors());
mongoose.set('useFindAndModify', false);

/*
    Database Connection
*/

mongoose.Promise = global.Promise;
mongoose.connect(config.DB,{useUnifiedTopology:true, useNewUrlParser:true})
.then(()=>{
    console.log('Database is connected');
})
.catch((err)=>{
    console.log('Cannot connect to the Database '+ err);
})






/*
    Server Listener
*/

const server = app.listen(port,()=>{
    console.log('Listening on port '+port);
})
