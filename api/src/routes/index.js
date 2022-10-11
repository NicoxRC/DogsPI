const { Router } = require('express');
const { getDogs, createDog } = require('../controllers/dog.controller')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', getDogs);
router.post('/dogs', createDog);
router.get('/dogs:id');
router.delete('/dogs:id');
router.put('/dogs:id');


module.exports = router;
