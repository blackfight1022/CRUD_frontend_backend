const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/reseñas.controller');

router.post('/', ctrl.crearReseñas);
router.get('/', ctrl.listarReseñass);
router.get('/:id', ctrl.obtenerReseñas);
router.put('/:id', ctrl.actualizarReseñas);
router.delete('/:id', ctrl.eliminarReseñas);

module.exports = router;