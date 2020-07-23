const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/solicitudes', (req, res, next) => {
  res.render('Solicitud');
});
module.exports = router;
