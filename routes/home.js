const express = require('express');
const path = require('path');
const fs = require('fs');
const rootDir = require('../util/path');
const word = require('./word')
const router = express.Router();



router.get('/', (req, res, next) => {
    console.log('in home middleware!');
    
    // try {
    //     var words = fs.readFileSync(path.join(rootDir,'words.txt'), 'utf8');
    //   } catch (err) {
    //     console.error(err);
    //   }
    // words = words.split('\n');
    // let words = word.words;
    console.log(word.words);
    res.render('index', {words: word.words});
});

module.exports = router;