const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('./add', async (req, res) => {
    res.send('Hola');
   //res.render('articles/add');
});



module.exports = router;