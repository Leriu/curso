const años = require( '../public/javascripts/solicitud/años')
const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/solicitudes', (req, res, next) => {
  let date = new Date();
  let mesActual = date.getMonth()+1;
  let añoActual = date.getFullYear();
  let dias = [];
  let inMes="";
  años.forEach(año => {
    if(año.año == añoActual){
      año.meses.forEach(mes => {
        if(mes.id == mesActual){
          for(let i = 1; i < mes.duracion; i++){
            dias.push({dia: i})
          }
         inMes=mes.inicio
        }
      })
    }
  })
console.log(dias)
  res.render('Solicitud', {dias,inMes});
});
router.get('/prueba', (req, res, next) => {
  res.render('Prueba');
});
module.exports = router;
