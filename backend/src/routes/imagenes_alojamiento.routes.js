const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/imagenes_alojamiento.controller');

router.post('/', ctrl.crearImagenesAlojamiento);
router.get('/', ctrl.listarImagenesAlojamientos);
router.get('/:id', ctrl.obtenerImagenesAlojamiento);
router.put('/:id', ctrl.actualizarImagenesAlojamiento);
router.delete('/:id', ctrl.eliminarImagenesAlojamiento);

module.exports = router;