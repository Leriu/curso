const express = require('express');
const router  = express.Router();
const User = require('../../models/Usuario');

router.get('/login', (req, res, next) => {
  res.render('registro/login');
});


module.exports = router;