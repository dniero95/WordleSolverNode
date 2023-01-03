const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();

router.use((req, res, next)=>{
    console.log('in the 404 middleware');
    res.status(404).sendFile(path.join(rootDir,'views', '404.html'))
 });

module.exports = router;