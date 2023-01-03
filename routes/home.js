const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();



router.get('/', (req, res, next)=>{
    console.log('in home middleware!');
    res.sendFile(path.join(rootDir, 'views','index.html'));
 });

 module.exports = router;