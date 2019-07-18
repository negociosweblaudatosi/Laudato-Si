const express = require('express');
const router = express.Router();
const pool = require('../database');
const {
    isLoggedIn,
    isNotLoggedIn
} = require('../controllers/auth');
//Rendizar la vista de agregar articulo (add.hbs)
router.get('/add', async (req, res) => {
    //res.send('Hola mundo');
   res.render('articles/add.hbs');
});

router.post('/add',(req,res)=>{
    res.send('Recibido');
})

module.exports = router;