const { Router } = require('express');
const { getTemperaments, getTemperament, createTemperament } = require('../controllers/temperament.controller');

const router = Router();

router.get('/temperaments', getTemperaments);
router.post('/temperaments', createTemperament);
router.get('/temperaments/:id', getTemperament);


module.exports = router;