const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/disponibilidad_alojamiento.controller');

router.post('/', ctrl.crearDisponibilidadAlojamiento);
router.get('/', ctrl.listarDisponibilidadAlojamientos);
router.get('/:id', ctrl.obtenerDisponibilidadAlojamiento);
router.put('/:id', ctrl.actualizarDisponibilidadAlojamiento);
router.delete('/:id', ctrl.eliminarDisponibilidadAlojamiento);

module.exports = router;