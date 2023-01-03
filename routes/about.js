const express = require('express');
const router = express.Router();

router.use('/about', (req, res, next)=>{
    console.log('in the about middleware!');
    res.send(`<h1>About wordle solver</h1>`);
 });

 module.exports = router;