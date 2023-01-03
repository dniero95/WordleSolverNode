const express = require('express');
const router = express.Router();

router.use('/docs', (req, res, next)=>{
    console.log('in documentation middleware!');
    res.send('<h1>wordle solver docs</h1>')
 });

 module.exports = router;