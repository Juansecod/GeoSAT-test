const express = require('express');
const router = express.Router();
const controllers = require('../controllers/predios.controller');

router.get('/', controllers.getPredios);
router.post('/register', controllers.postPredios);
router.put('/update', controllers.putPredios);
router.delete('/delete', controllers.deletePredio);

module.exports = router;