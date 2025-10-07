const { HistorialCambios } = require('../models');

exports.crearHistorialCambios = async (req, res) => {
  try {
    const data = await HistorialCambios.create(req.body);
    res.status(201).json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.listarHistorialCambioss = async (req, res) => {
  try {
    const data = await HistorialCambios.findAll();
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.obtenerHistorialCambios = async (req, res) => {
  try {
    const data = await HistorialCambios.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'HistorialCambios no encontrado' });
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.actualizarHistorialCambios = async (req, res) => {
  try {
    const data = await HistorialCambios.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'HistorialCambios no encontrado' });
    await data.update(req.body);
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.eliminarHistorialCambios = async (req, res) => {
  try {
    const data = await HistorialCambios.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'HistorialCambios no encontrado' });
    await data.destroy();
    res.json({ message: 'HistorialCambios eliminado' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};