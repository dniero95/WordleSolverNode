const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();

router.use('/about', (req, res, next)=>{
    console.log('in the about middleware!');
    res.render('about', {pageTitle: "About"});
    // res.sendFile(path.join(rootDir,'views', 'about.html'));
 });

 module.exports = router;