const { Anfitriones } = require('../models');

exports.crearAnfitriones = async (req, res) => {
  try {
    const data = await Anfitriones.create(req.body);
    res.status(201).json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.listarAnfitrioness = async (req, res) => {
  try {
    const data = await Anfitriones.findAll();
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.obtenerAnfitriones = async (req, res) => {
  try {
    const data = await Anfitriones.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Anfitriones no encontrado' });
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.actualizarAnfitriones = async (req, res) => {
  try {
    const data = await Anfitriones.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Anfitriones no encontrado' });
    await data.update(req.body);
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.eliminarAnfitriones = async (req, res) => {
  try {
    const data = await Anfitriones.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Anfitriones no encontrado' });
    await data.destroy();
    res.json({ message: 'Anfitriones eliminado' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};