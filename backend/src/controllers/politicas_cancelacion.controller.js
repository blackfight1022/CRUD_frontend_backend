const { PoliticasCancelacion } = require('../models');

exports.crearPoliticasCancelacion = async (req, res) => {
  try {
    const data = await PoliticasCancelacion.create(req.body);
    res.status(201).json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.listarPoliticasCancelacions = async (req, res) => {
  try {
    const data = await PoliticasCancelacion.findAll();
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.obtenerPoliticasCancelacion = async (req, res) => {
  try {
    const data = await PoliticasCancelacion.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'PoliticasCancelacion no encontrado' });
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.actualizarPoliticasCancelacion = async (req, res) => {
  try {
    const data = await PoliticasCancelacion.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'PoliticasCancelacion no encontrado' });
    await data.update(req.body);
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.eliminarPoliticasCancelacion = async (req, res) => {
  try {
    const data = await PoliticasCancelacion.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: 'PoliticasCancelacion no encontrado' });
    await data.destroy();
    res.json({ message: 'PoliticasCancelacion eliminado' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};