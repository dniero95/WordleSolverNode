const fs = require('fs');
const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const filter = require('../util/filter');




router.post('/word', (req, res, next)=>{

    console.log('in the /word middleware');
    console.log(req.body);
    var gameStatus = 0;
    // fs.writeFile('../word.txt', req.body.word);
    try {
        if(gameStatus === 0){
          var words = fs.readFileSync(path.join(rootDir,'words.txt'), 'utf8');
          gameStatus = 1;
        }
      } catch (err) {
        console.error(err);
      }
    words = words.split('\n');
    console.log(words);


    module.exports.words = words;
    res.redirect('/')
 });


 module.exports = router;