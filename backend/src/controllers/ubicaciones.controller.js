const { Ubicaciones } = require('../models');

exports.crearUbicaciones = async (req, res) => {
  try {
    const data = await Ubicaciones.create(req.body);
    res.status(201).json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.listarUbicacioness = async (req, res) => {
  try {
    const data = await Ubicaciones.findAll();
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.obtenerUbicaciones = async (req, res) => {
  try {
    const data = await Ubicaciones.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Ubicaciones no encontrado' });
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.actualizarUbicaciones = async (req, res) => {
  try {
    const data = await Ubicaciones.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Ubicaciones no encontrado' });
    await data.update(req.body);
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.eliminarUbicaciones = async (req, res) => {
  try {
    const data = await Ubicaciones.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Ubicaciones no encontrado' });
    await data.destroy();
    res.json({ message: 'Ubicaciones eliminado' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};