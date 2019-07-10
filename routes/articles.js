const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/add', async (req, res) => {
    //res.send('Hola mundo');
   res.render('articles/add');
});
router.post('/add',(req,res)=>{
    res.send('Recibido');
})

module.exports = router;