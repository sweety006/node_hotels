const mongoose = require('mongoose');

//Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL, {
    // useNewUrlParser: true, 
    // useUnifiedTopology: true
})
//Get the deafault connection
// mongoose maintains a default connecction object representing the mongoDB connection 
const db = mongoose.connection;

//define event listener for database connection
db.on('connected', () => {
    console.log('Connected to MongoDB server')
})

db.on('error', (err) => {
    console.log('MongoDB connection error:',err)
})

db.on('disconnected', () => {
    console.log('MongoDB disconnected')
})

//Export the Database connection
module.exports = db;