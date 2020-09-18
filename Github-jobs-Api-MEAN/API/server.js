let express = require('express');
let morgan = require('morgan');
let mongoose = require('mongoose');
let bodyparser = require('body-parser');
let jobSchema = require('./app/schema/jobs');
let routes = require('./app/routes/api'); 
let cors = require('cors');
let app = express();


// Middlewares
app.use(bodyparser.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api',routes);


// Variables
const PORT = process.env.PORT || 3000 ;
const MONGO_URL = 'mongodb://localhost:27017/jobs';
var db;

mongoose.connect(MONGO_URL,{useNewUrlParser:true, useUnifiedTopology:true});
db = mongoose.connection;


db.on('error',() => console.log('Error connecting to database'));

db.once('open',function(){
    console.log('Connection Successful');

    // Query to empty the collection when connection is made
    // let query = {};
    // jobSchema.collection.remove(query, (err)=>{
    //     if(err){
    //         console.log('Error Deleting data');
    //     }
    //     else{
    //         console.log('Deleted the collection Docs');
    //     }
    // })
    // Query ends 
})


app.listen(PORT,()=>{
    console.log('Server running on '+PORT);
})