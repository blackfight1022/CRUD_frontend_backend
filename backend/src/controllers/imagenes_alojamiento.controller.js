const { ImagenesAlojamiento } = require('../models');

exports.crearImagenesAlojamiento = async (req, res) => {
  try {
    const data = await ImagenesAlojamiento.create(req.body);
    res.status(201).json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.listarImagenesAlojamientos = async (req, res) => {
  try {
    const data = await ImagenesAlojamiento.findAll();
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.obtenerImagenesAlojamiento = async (req, res) => {
  try {
    const data = await ImagenesAlojamiento.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'ImagenesAlojamiento no encontrado' });
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.actualizarImagenesAlojamiento = async (req, res) => {
  try {
    const data = await ImagenesAlojamiento.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'ImagenesAlojamiento no encontrado' });
    await data.update(req.body);
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.eliminarImagenesAlojamiento = async (req, res) => {
  try {
    const data = await ImagenesAlojamiento.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'ImagenesAlojamiento no encontrado' });
    await data.destroy();
    res.json({ message: 'ImagenesAlojamiento eliminado' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};