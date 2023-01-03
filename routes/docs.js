const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();

router.use('/docs', (req, res, next)=>{
    console.log('in documentation middleware!');
    res.sendFile(path.join(rootDir,'views', 'docs.html'));
 });

 module.exports = router;