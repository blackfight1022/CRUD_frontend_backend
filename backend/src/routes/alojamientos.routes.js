const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/alojamientos.controller');

router.post('/', ctrl.crearAlojamientos);
router.get('/', ctrl.listarAlojamientoss);
router.get('/:id', ctrl.obtenerAlojamientos);
router.put('/:id', ctrl.actualizarAlojamientos);
router.delete('/:id', ctrl.eliminarAlojamientos);

module.exports = router;