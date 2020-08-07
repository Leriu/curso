const express = require('express');
const router  = express.Router();
const Solicitudes = require('../models/Solicitud');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/solicitudes', (req, res, next) => {
  //La función find() me regresa un array de Documentos que pertenecen a un modelo
  Solicitudes.find()
    .then(solicitudes => {
      res.render('Solicitud', {solicitudes});
    })
    .catch(error => {
      res.render('Solicitud', {error});
    })
     
  
});


module.exports = router;
