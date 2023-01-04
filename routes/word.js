const fs = require('fs');
const express = require('express');
const router = express.Router();


router.post('/word', (req, res, next)=>{
    console.log('in the /word middleware');
    console.log(req.body);
    // fs.writeFile('../word.txt', req.body.word);
    res.redirect('/')
 });


 module.exports = router;