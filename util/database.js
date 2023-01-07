const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = '';

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