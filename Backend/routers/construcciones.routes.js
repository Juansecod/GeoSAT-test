const express = require('express');
const router = express.Router();
const controllers = require('../controllers/construcciones.controller');

router.get('/', controllers.getConstruccionesByPredio);
router.post('/register', controllers.postConstrucciones);
router.put('/update', controllers.putConstrucciones);
router.delete('/delete', controllers.deleteConstruccion);

module.exports = router;