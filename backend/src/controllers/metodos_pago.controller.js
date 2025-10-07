const { MetodosPago } = require('../models');

exports.crearMetodosPago = async (req, res) => {
  try {
    const data = await MetodosPago.create(req.body);
    res.status(201).json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.listarMetodosPagos = async (req, res) => {
  try {
    const data = await MetodosPago.findAll();
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.obtenerMetodosPago = async (req, res) => {
  try {
    const data = await MetodosPago.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'MetodosPago no encontrado' });
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.actualizarMetodosPago = async (req, res) => {
  try {
    const data = await MetodosPago.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'MetodosPago no encontrado' });
    await data.update(req.body);
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.eliminarMetodosPago = async (req, res) => {
  try {
    const data = await MetodosPago.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'MetodosPago no encontrado' });
    await data.destroy();
    res.json({ message: 'MetodosPago eliminado' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};