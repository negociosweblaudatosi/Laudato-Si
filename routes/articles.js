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
router.post('/add', async (req, res) => {
    const {
        titulo,
        articuloEscrito
    } = req.body;
    const newLink = {
        titulo,
        articuloEscrito,
        idUsuario: req.user.id
    };

    await pool.query('INSERT INTO articulos set ?', [newLink]);
    req.flash('sucess', 'Articulo Guardado Exitosamente');
    res.redirect('/articles');
});

 router.get('/', async (req, res) => {
     const articles1 = await pool.query('SELECT * FROM articulos');
     res.render('articles/listAll.hbs', {
         articles1
     });
 });

router.post('/edit/:id', async (req, res) => {
    const {
        id
    } = req.params;
    const {
        titulo,
        articuloEscrito
    } = req.body;
    const newLink = {
        titulo,
        articuloEscrito,
        idUsuario: req.user.id
    };
    await pool.query('UPDATE articulos set ? WHERE idArticulo = ?', [newLink, id]);
    req.flash('success', 'Articulo Guardado Exitosamente');
    res.redirect('/articles');
});

router.get('/edit/:id', async (req, res) => {
    const {
        id
    } = req.params;
    const articles = await pool.query('SELECT * FROM articulos WHERE id = ?', [id]);
    console.log(articles);
    res.render('articles/edit', {
        articles: articles[0]
    });
});

router.get('/delete/:id', async (req, res) => {
    const {
        id
    } = req.params;
    await pool.query('DELETE FROM articulos WHERE idArticulo = ?', [id]);
    req.flash('sucess', 'Articulo Eliminado Exitosamente');
    res.redirect('/articles');
});

module.exports = router;