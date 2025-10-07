const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/pagos.controller');

router.post('/', ctrl.crearPagos);
router.get('/', ctrl.listarPagoss);
router.get('/:id', ctrl.obtenerPagos);
router.put('/:id', ctrl.actualizarPagos);
router.delete('/:id', ctrl.eliminarPagos);

module.exports = router;