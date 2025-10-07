const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/clientes.controller');

router.post('/', ctrl.crearClientes);
router.get('/', ctrl.listarClientess);
router.get('/:id', ctrl.obtenerClientes);
router.put('/:id', ctrl.actualizarClientes);
router.delete('/:id', ctrl.eliminarClientes);

module.exports = router;