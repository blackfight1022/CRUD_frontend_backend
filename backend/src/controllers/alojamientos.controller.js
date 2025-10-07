const { Alojamientos } = require('../models');

exports.crearAlojamientos = async (req, res) => {
  try {
    const data = await Alojamientos.create(req.body);
    res.status(201).json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.listarAlojamientoss = async (req, res) => {
  try {
    const data = await Alojamientos.findAll();
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.obtenerAlojamientos = async (req, res) => {
  try {
    const data = await Alojamientos.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Alojamientos no encontrado' });
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.actualizarAlojamientos = async (req, res) => {
  try {
    const data = await Alojamientos.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Alojamientos no encontrado' });
    await data.update(req.body);
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.eliminarAlojamientos = async (req, res) => {
  try {
    const data = await Alojamientos.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Alojamientos no encontrado' });
    await data.destroy();
    res.json({ message: 'Alojamientos eliminado' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};