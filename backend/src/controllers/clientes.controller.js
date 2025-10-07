const { Clientes } = require('../models');

exports.crearClientes = async (req, res) => {
  try {
    const data = await Clientes.create(req.body);
    res.status(201).json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.listarClientess = async (req, res) => {
  try {
    const data = await Clientes.findAll();
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.obtenerClientes = async (req, res) => {
  try {
    const data = await Clientes.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Clientes no encontrado' });
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.actualizarClientes = async (req, res) => {
  try {
    const data = await Clientes.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Clientes no encontrado' });
    await data.update(req.body);
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.eliminarClientes = async (req, res) => {
  try {
    const data = await Clientes.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Clientes no encontrado' });
    await data.destroy();
    res.json({ message: 'Clientes eliminado' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};