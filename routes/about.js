const express = require('express');
const path = require('path');

const router = express.Router();

router.use('/about', (req, res, next)=>{
    console.log('in the about middleware!');
    res.sendFile(path.join(__dirname, '../','views', 'about.html'));
 });

 module.exports = router;