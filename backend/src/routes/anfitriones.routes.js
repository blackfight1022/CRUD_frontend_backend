const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/anfitriones.controller');

router.post('/', ctrl.crearAnfitriones);
router.get('/', ctrl.listarAnfitrioness);
router.get('/:id', ctrl.obtenerAnfitriones);
router.put('/:id', ctrl.actualizarAnfitriones);
router.delete('/:id', ctrl.eliminarAnfitriones);

module.exports = router;