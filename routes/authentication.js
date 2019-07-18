const express = require('express');
const router = express.Router();

const passport = require('passport');
const {
    isLoggedIn
} = require('../controllers/auth');

// SIGNUP
router.get('/SignUp', (req, res) => {
    res.render('auth/SignUp');
});

router.post('/SignUp', passport.authenticate('local.SignUp', {
    successRedirect: '/profile',
    failureRedirect: '/SignUp',
    failureFlash: true
}));

// SINGIN
router.get('/SignIn', (req, res) => {
    res.render('auth/SignIn');
    console.log('visto');
});

router.post('/SignIn', (req, res, next) => {
    req.check('nombreUsuario', 'Username is Required').notEmpty();
    req.check('contrasena', 'Password is Required').notEmpty();
    const errors = req.validationErrors();
    if (errors.length > 0) {
        req.flash('message', errors[0].msg);
        res.redirect('/SignIn');
    }
    passport.authenticate('local.SignIn', {
        successRedirect: '/profile',
        failureRedirect: '/SignIn',
        failureFlash: true
    })(req, res, next);
});

router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
});

router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile');
});

  router.post('/SignIn', (req, res, next) => {

      passport.authenticate('local.SignIn', {
          successRedirect: '/profile',
          failureRedirect: '/SignIn',
          failureFlash: true
      })(req, res, next);

  });

module.exports = router;