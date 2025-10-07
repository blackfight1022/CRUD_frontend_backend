const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/historial_cambios.controller');

router.post('/', ctrl.crearHistorialCambios);
router.get('/', ctrl.listarHistorialCambioss);
router.get('/:id', ctrl.obtenerHistorialCambios);
router.put('/:id', ctrl.actualizarHistorialCambios);
router.delete('/:id', ctrl.eliminarHistorialCambios);

module.exports = router;