
const wordRoutes = require('./routes/word');
const docsRoutes = require('./routes/docs');
const aboutRoutes = require('./routes/about');
const notFoundRoutes = require('./routes/404');
const home = require('./routes/home');



// import express
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// create the app
const app = express();

// routes

// parser of the body

app.use(bodyParser.urlencoded({extended: false}));
// serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(docsRoutes);
app.use(aboutRoutes);
app.use(wordRoutes);
app.use(home);
app.use(notFoundRoutes);


app.listen(3000, 'localhost', () => {
   console.log('listening for requests on port 3000');
});