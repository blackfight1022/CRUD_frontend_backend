const { AlojamientosServicios } = require('../models');

exports.crearAlojamientosServicios = async (req, res) => {
  try {
    const data = await AlojamientosServicios.create(req.body);
    res.status(201).json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.listarAlojamientosServicioss = async (req, res) => {
  try {
    const data = await AlojamientosServicios.findAll();
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.obtenerAlojamientosServicios = async (req, res) => {
  try {
    const data = await AlojamientosServicios.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'AlojamientosServicios no encontrado' });
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.actualizarAlojamientosServicios = async (req, res) => {
  try {
    const data = await AlojamientosServicios.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'AlojamientosServicios no encontrado' });
    await data.update(req.body);
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.eliminarAlojamientosServicios = async (req, res) => {
  try {
    const data = await AlojamientosServicios.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'AlojamientosServicios no encontrado' });
    await data.destroy();
    res.json({ message: 'AlojamientosServicios eliminado' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};