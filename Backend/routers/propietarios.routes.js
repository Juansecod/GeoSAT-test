const express = require('express');
const router = express.Router();
const controllers = require('../controllers/propietarios.controller');

router.get('/', controllers.getPropietariosByPredio);
router.post('/register', controllers.postPropietarios);
router.put('/update', controllers.putPropietarios);
router.delete('/delete', controllers.deletePropietario);

module.exports = router;