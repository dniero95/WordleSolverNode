
// import express
const express = require('express')

// create the app
const app = express();

// routes

app.use('/about', (req, res, next)=>{
   console.log('in the about middleware!');
   res.send('<h1>About wordle solver</h1>')
});
app.use('/docs', (req, res, next)=>{
   console.log('in documentation middleware!');
   res.send('<h1>wordle solver docs</h1>')
});

app.use('/', (req, res, next)=>{
   console.log('in home middleware!');
   res.send('<h1>wordle solver</h1>')
});



app.listen(3000, 'localhost', () => {
   console.log('listening for requests on port 3000');
});