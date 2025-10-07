const { Servicios } = require('../models');

exports.crearServicios = async (req, res) => {
  try {
    const data = await Servicios.create(req.body);
    res.status(201).json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.listarServicioss = async (req, res) => {
  try {
    const data = await Servicios.findAll();
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.obtenerServicios = async (req, res) => {
  try {
    const data = await Servicios.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Servicios no encontrado' });
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.actualizarServicios = async (req, res) => {
  try {
    const data = await Servicios.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Servicios no encontrado' });
    await data.update(req.body);
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.eliminarServicios = async (req, res) => {
  try {
    const data = await Servicios.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Servicios no encontrado' });
    await data.destroy();
    res.json({ message: 'Servicios eliminado' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};