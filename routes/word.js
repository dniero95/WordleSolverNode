const fs = require('fs');
const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');



router.post('/word', (req, res, next)=>{
    console.log('in the /word middleware');
    console.log(req.body);
    // fs.writeFile('../word.txt', req.body.word);
    try {
        var words = fs.readFileSync(path.join(rootDir,'words.txt'), 'utf8');
      } catch (err) {
        console.error(err);
      }
    words = words.split('\n');
    console.log(words);
    res.redirect('/')
 });


 module.exports = router;