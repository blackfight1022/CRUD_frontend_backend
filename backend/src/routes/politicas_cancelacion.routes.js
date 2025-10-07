const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/politicas_cancelacion.controller');

router.post('/', ctrl.crearPoliticasCancelacion);
router.get('/', ctrl.listarPoliticasCancelacions);
router.get('/:id', ctrl.obtenerPoliticasCancelacion);
router.put('/:id', ctrl.actualizarPoliticasCancelacion);
router.delete('/:id', ctrl.eliminarPoliticasCancelacion);

module.exports = router;