const { DisponibilidadAlojamiento } = require('../models');

exports.crearDisponibilidadAlojamiento = async (req, res) => {
  try {
    const data = await DisponibilidadAlojamiento.create(req.body);
    res.status(201).json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.listarDisponibilidadAlojamientos = async (req, res) => {
  try {
    const data = await DisponibilidadAlojamiento.findAll();
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.obtenerDisponibilidadAlojamiento = async (req, res) => {
  try {
    const data = await DisponibilidadAlojamiento.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'DisponibilidadAlojamiento no encontrado' });
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.actualizarDisponibilidadAlojamiento = async (req, res) => {
  try {
    const data = await DisponibilidadAlojamiento.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'DisponibilidadAlojamiento no encontrado' });
    await data.update(req.body);
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.eliminarDisponibilidadAlojamiento = async (req, res) => {
  try {
    const data = await DisponibilidadAlojamiento.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'DisponibilidadAlojamiento no encontrado' });
    await data.destroy();
    res.json({ message: 'DisponibilidadAlojamiento eliminado' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};