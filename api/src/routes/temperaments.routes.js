const { Router } = require('express');
const { getTemperaments, getTemperament } = require('../controllers/temperament.controller');

const router = Router();

router.get('/temperaments', getTemperaments);
router.get('/temperaments/:id', getTemperament);


module.exports = router;