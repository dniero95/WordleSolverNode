
const wordRoutes = require('./routes/word');
const docsRoutes = require('./routes/docs');
const aboutRoutes = require('./routes/about');

// import express
const express = require('express');
const bodyParser = require('body-parser');
// create the app
const app = express();

// routes

// parser of the body

app.use(bodyParser.urlencoded({extended: false}));


app.use(docsRoutes);
app.use(aboutRoutes);
app.use(wordRoutes);

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