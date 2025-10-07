const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/reservas.controller');

router.post('/', ctrl.crearReservas);
router.get('/', ctrl.listarReservass);
router.get('/:id', ctrl.obtenerReservas);
router.put('/:id', ctrl.actualizarReservas);
router.delete('/:id', ctrl.eliminarReservas);

module.exports = router;