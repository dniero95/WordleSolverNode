//  import module http
const http = require('http');
const express = require('express')
const routes = require('./routes');


const app = express();
app.use((req, res, next)=>{
   console.log('in a middleware!');
   next();
});
app.use((req, res, next)=>{
   console.log('in another middleware!');
});

const server = http.createServer(app);

server.listen(3000, 'localhost', () => {
   console.log('listening for requests on port 3000');
});