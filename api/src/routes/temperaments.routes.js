const { Router } = require('express');
const { getTemperaments } = require('../controllers/temperament.controller');

const router = Router();

router.get('/temperaments', getTemperaments);

module.exports = router;