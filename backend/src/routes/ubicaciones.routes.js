const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/ubicaciones.controller');

router.post('/', ctrl.crearUbicaciones);
router.get('/', ctrl.listarUbicacioness);
router.get('/:id', ctrl.obtenerUbicaciones);
router.put('/:id', ctrl.actualizarUbicaciones);
router.delete('/:id', ctrl.eliminarUbicaciones);

module.exports = router;