const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb+srv://admin:<password>@wordlesolver.54nyv3e.mongodb.net/?retryWrites=true&w=majority';

const mongoConnect = callback =>{
    MongoClient.connect()
    .then(result => {
        console.log('MongoDB connection successuf');
        callback(result);
    })
    .catch(err=>{
        console.log(err);
    });
};

module.exports = mongoConnect;