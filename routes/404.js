const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();

router.use((req, res, next)=>{
    console.log('in the 404 middleware');
    console.log(req.url)
    res.status(404).render('404', {pageUrl: req.url, pageTitle: "Page Not Found"})
 });

module.exports = router;