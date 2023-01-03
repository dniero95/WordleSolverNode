
const wordRoutes = require('./routes/word');
const docsRoutes = require('./routes/docs');
const aboutRoutes = require('./routes/about');
const notFoundRoutes = require('./routes/404');



// import express
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// create the app
const app = express();

// routes

// parser of the body

app.use(bodyParser.urlencoded({extended: false}));


app.use(docsRoutes);
app.use(aboutRoutes);
app.use(wordRoutes);

app.use('/home', (req, res, next)=>{
   console.log('in home middleware!');
   res.sendFile(path.join(__dirname,'views', 'index.html'));
   
   // res.send(`<h1>wordle solver</h1>
   // <form action="/word" method="POST">
   // <input type="text" name="word">
   // <button type="submit">submit</button>
   // </form>`);
});


app.use(notFoundRoutes);


app.listen(3000, 'localhost', () => {
   console.log('listening for requests on port 3000');
});