const { Reseñas } = require('../models');

exports.crearReseñas = async (req, res) => {
  try {
    const data = await Reseñas.create(req.body);
    res.status(201).json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.listarReseñass = async (req, res) => {
  try {
    const data = await Reseñas.findAll();
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.obtenerReseñas = async (req, res) => {
  try {
    const data = await Reseñas.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Reseñas no encontrado' });
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.actualizarReseñas = async (req, res) => {
  try {
    const data = await Reseñas.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Reseñas no encontrado' });
    await data.update(req.body);
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.eliminarReseñas = async (req, res) => {
  try {
    const data = await Reseñas.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Reseñas no encontrado' });
    await data.destroy();
    res.json({ message: 'Reseñas eliminado' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};