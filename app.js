//  import module http
const http = require('http');
//  const fs = require('fs')
//  const express = require('express');

const server = http.createServer((req, res) => {

   // follow code log in the console url, method and header attribute of the req obj
   //  console.log(req.url, req.method, req.headers);
   // the following line close the program if executed
   // process.exit();
   const url = req.url;
   if (url === '/') {
      res.write('<html>');
      res.write('<head><title>home</title></head>');
      res.write('<body><h1>wordle solver</h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>')

      res.write('</html>');
      
      return res.end();
   }


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