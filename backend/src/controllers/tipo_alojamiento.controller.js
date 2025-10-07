const { TipoAlojamiento } = require('../models');

exports.crearTipoAlojamiento = async (req, res) => {
  try {
    const data = await TipoAlojamiento.create(req.body);
    res.status(201).json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.listarTipoAlojamientos = async (req, res) => {
  try {
    const data = await TipoAlojamiento.findAll();
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.obtenerTipoAlojamiento = async (req, res) => {
  try {
    const data = await TipoAlojamiento.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'TipoAlojamiento no encontrado' });
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.actualizarTipoAlojamiento = async (req, res) => {
  try {
    const data = await TipoAlojamiento.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'TipoAlojamiento no encontrado' });
    await data.update(req.body);
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.eliminarTipoAlojamiento = async (req, res) => {
  try {
    const data = await TipoAlojamiento.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'TipoAlojamiento no encontrado' });
    await data.destroy();
    res.json({ message: 'TipoAlojamiento eliminado' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};