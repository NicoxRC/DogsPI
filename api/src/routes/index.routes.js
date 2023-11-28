const { Router } = require('express');
const controllers = require('../controller');

const router = Router();

router.get('/dogs', controllers.getDogs);
router.get('/dogs/:id', controllers.getDog);
router.get('/temperaments', controllers.getTemperaments);
router.post('/dogs', controllers.createDogs);
router.post('/sha256', controllers.createSHA256);

module.exports = router;
