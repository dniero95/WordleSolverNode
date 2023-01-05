const fs = require('fs');
const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
// const filter = require('../util/filter');




router.post('/word', (req, res, next) => {

  console.log('in the /word middleware');
  console.log(req.body);
  var gameStatus = 0;
  // fs.writeFile('../word.txt', req.body.word);
  try {
    if (gameStatus === 0) {
      var words = fs.readFileSync(path.join(rootDir, 'words.txt'), 'utf8');
      gameStatus = 1;
    }
  } catch (err) {
    console.error(err);
  }
  words = words.split('\n');

  //starts filter

  const letter = req.body.wrongLetters[0];
  for (let word in words) {
    for (let index = 0; index < req.body.wrongLetters.length; index++) {
      // console.log(letter);
      if (word.includes(letter)) {
        // Use a revisitation of the following code in stack overflow
        // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
        const wordIndex = words.indexOf(word);
        if (wordIndex > -1) { // only splice array when item is found
          words.splice(wordIndex, 1); // 2nd parameter means remove one item only
        }

      }
    }
  }

  // end filter

  console.log(words);


  module.exports.words = words;
  res.redirect('/')
});


module.exports = router;