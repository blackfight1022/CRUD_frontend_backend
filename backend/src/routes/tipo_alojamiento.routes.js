const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/tipo_alojamiento.controller');

router.post('/', ctrl.crearTipoAlojamiento);
router.get('/', ctrl.listarTipoAlojamientos);
router.get('/:id', ctrl.obtenerTipoAlojamiento);
router.put('/:id', ctrl.actualizarTipoAlojamiento);
router.delete('/:id', ctrl.eliminarTipoAlojamiento);

module.exports = router;