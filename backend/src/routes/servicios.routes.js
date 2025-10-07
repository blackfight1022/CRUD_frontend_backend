const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/servicios.controller');

router.post('/', ctrl.crearServicios);
router.get('/', ctrl.listarServicioss);
router.get('/:id', ctrl.obtenerServicios);
router.put('/:id', ctrl.actualizarServicios);
router.delete('/:id', ctrl.eliminarServicios);

module.exports = router;