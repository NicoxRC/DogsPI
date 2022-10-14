const { Router } = require('express');
const { getDogs, createDog, getDog } = require('../controllers/dog.controller');

const router = Router();

router.get('/dogs', getDogs);
router.post('/dogs', createDog);
router.get('/dogs/:id', getDog);

module.exports = router;
