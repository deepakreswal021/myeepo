const express = require('express');
const colors  = require('colors');
const morgan  = require('morgan');
const dotenv  = require('dotenv');
const connectDB = require('./config/db');

//.env config
dotenv.config();


//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());//handle merge parse issue ,middleware function in Express, handle JSON-encoded request bodies.
app.use(morgan('dev'));// request logger middleware


//routes
app.use('/api/v1/user',require('./routes/userRoutes'));

//port
const port = process.env.PORT || 8080 //optionally provided 8080

//listen port
app.listen(port,()=>{
    console.log(`Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`.bgCyan.white);
})

