const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/metodos_pago.controller');

router.post('/', ctrl.crearMetodosPago);
router.get('/', ctrl.listarMetodosPagos);
router.get('/:id', ctrl.obtenerMetodosPago);
router.put('/:id', ctrl.actualizarMetodosPago);
router.delete('/:id', ctrl.eliminarMetodosPago);

module.exports = router;