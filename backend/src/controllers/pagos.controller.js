const { Pagos } = require('../models');

exports.crearPagos = async (req, res) => {
  try {
    const data = await Pagos.create(req.body);
    res.status(201).json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.listarPagoss = async (req, res) => {
  try {
    const data = await Pagos.findAll();
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.obtenerPagos = async (req, res) => {
  try {
    const data = await Pagos.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Pagos no encontrado' });
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.actualizarPagos = async (req, res) => {
  try {
    const data = await Pagos.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Pagos no encontrado' });
    await data.update(req.body);
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.eliminarPagos = async (req, res) => {
  try {
    const data = await Pagos.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Pagos no encontrado' });
    await data.destroy();
    res.json({ message: 'Pagos eliminado' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};