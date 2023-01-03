
// import express
const express = require('express');
const bodyParser = require('body-parser');
// create the app
const app = express();

// routes

// parser of the body

app.use(bodyParser.urlencoded({extended: false}));

app.use('/about', (req, res, next)=>{
   console.log('in the about middleware!');
   res.send(`<h1>About wordle solver</h1>`);
});
app.use('/docs', (req, res, next)=>{
   console.log('in documentation middleware!');
   res.send('<h1>wordle solver docs</h1>')
});

app.use('/word', (req, res, next)=>{
   console.log('in the /word middleware');
   console.log(req.body);
   res.redirect('/')
});

app.use('/', (req, res, next)=>{
   console.log('in home middleware!');
   res.send(`<h1>wordle solver</h1>
   <form action="/word" method="POST">
   <input type="text" name="word">
   <button type="submit">submit</button>
   </form>`)
});



app.listen(3000, 'localhost', () => {
   console.log('listening for requests on port 3000');
});