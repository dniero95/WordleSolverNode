const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const fs = require('fs');
const router = express.Router();



router.get('/', (req, res, next) => {
    console.log('in home middleware!');
    
    try {
        var words = fs.readFileSync('/Users/borgiak/coding/NodeProjects/WordleSolverNode/words.txt', 'utf8');
        console.log(words);
      } catch (err) {
        console.error(err);
      }
    console.log(words);
    res.render('index', {words: words});
});

module.exports = router;