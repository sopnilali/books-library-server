const mongoose = require('mongoose');
//dot environment config
require('dotenv').config()

const getConnectionString = ()=>{

    let connectionURL

    if(process.env.NODE_ENV === 'development'){
        connectionURL = process.env.DATABASE_LOCAL
    }
    else{
        connectionURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.35itrev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

        
    }
    return connectionURL
}


const ConnectDB = ()=>{
    console.log('Connecting to MongoDB...');
    const url = getConnectionString()
    mongoose.connect(url, {dbName: process.env.DB_NAME})
    .then(()=> console.log('Connected to MongoDB...'))
}

module.exports = ConnectDB;