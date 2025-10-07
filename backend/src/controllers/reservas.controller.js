const { Reservas } = require('../models');

exports.crearReservas = async (req, res) => {
  try {
    const data = await Reservas.create(req.body);
    res.status(201).json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.listarReservass = async (req, res) => {
  try {
    const data = await Reservas.findAll();
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.obtenerReservas = async (req, res) => {
  try {
    const data = await Reservas.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Reservas no encontrado' });
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.actualizarReservas = async (req, res) => {
  try {
    const data = await Reservas.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Reservas no encontrado' });
    await data.update(req.body);
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.eliminarReservas = async (req, res) => {
  try {
    const data = await Reservas.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'Reservas no encontrado' });
    await data.destroy();
    res.json({ message: 'Reservas eliminado' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};