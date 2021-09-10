const express = require('express');
const router = express.Router();
const controllers = require('../controllers/terrenos.controller');

router.get('/', controllers.getTerrenoByPredio);
router.post('/register', controllers.postTerrenos);
router.put('/update', controllers.putTerrenos);
router.delete('/delete', controllers.deleteTerrenos);

module.exports = router;