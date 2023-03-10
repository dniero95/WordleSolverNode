const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const fs = require('fs');
const router = express.Router();



router.get('/', (req, res, next) => {
    console.log('in home middleware!');
    
    try {
        var words = fs.readFileSync(path.join(rootDir,'words.txt'), 'utf8');
      } catch (err) {
        console.error(err);
      }
    words = words.split('\n');
    res.render('index', {words: words, pageTitle: "Home"});
});

module.exports = router;