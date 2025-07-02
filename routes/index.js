var express = require('express');
var router = express.Router();
//importar axios para usar serivioc:
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// agrego la ruta paraa fotos en el mismo index
router.get('/photos', async function(req, res, next) {
  const URL = 'https://dawm-fiec-espol-default-rtdb.firebaseio.com/photos.json';

  try {
    //solo llamar asi!!!
    
    const response = await axios.get(URL);  // Llama a la API

    res.render('fotos', { title: 'Fotos', fotos: response.data });

  } catch (error) {
    console.error('Error al obtener fotos:', error);
    res.status(500).send('Error al cargar las fotos');
  }
});


