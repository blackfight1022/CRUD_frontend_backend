const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/alojamientos_servicios.controller');

router.post('/', ctrl.crearAlojamientosServicios);
router.get('/', ctrl.listarAlojamientosServicioss);
router.get('/:id', ctrl.obtenerAlojamientosServicios);
router.put('/:id', ctrl.actualizarAlojamientosServicios);
router.delete('/:id', ctrl.eliminarAlojamientosServicios);

module.exports = router;