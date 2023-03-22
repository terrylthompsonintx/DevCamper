const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors')
const bootcamps = require('./routes/bootcamps');
dotenv.config({path:'./config/config.env'});
const morgan = require('morgan')
const connectDb = require('./config/db')

connectDb();
const app = express();
//Body Parser 
app.use(express.json());

if (process.env.NODE_ENV === 'devolopment'){
    
    app.use(morgan('dev'));
}


app.use('/api/v1/bootcamps', bootcamps)



const PORT = process.env.PORT  || 5000;

const server = app.listen(PORT, console.log (`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.underline.bold));

process.on('unhandledRejection', (err,promise) => {
    console.log(`Error: ${err.message}`.red.underline.bold)
    server.close(() => process.exit(1))
})

