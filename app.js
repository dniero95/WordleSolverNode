//  import module http
 const http = require('http');
//  const fs = require('fs')
//  const express = require('express');

 const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
    // the following line close the program if executed
    // process.exit();
   
    res.setHeader('Content-Type', 'text/html');
    res.write('wordle solver');
    res.end();

 });



// express app
// const app = express();

// app.get('/words', (req, res) => {
//    const blogs = [
//      {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//      {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//      {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//    ];
//    res.render('index', { title: 'Home', blogs });
//  });

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
  });