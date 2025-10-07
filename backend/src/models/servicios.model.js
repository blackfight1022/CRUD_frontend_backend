const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Servicio extends Model {}

Servicio.init({
  id_servicio: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING(100), allowNull: false },
  descripcion: { type: DataTypes.TEXT }
}, {
  sequelize,
  modelName: 'Servicio',
  tableName: 'servicios',
  timestamps: false
});

module.exports = Servicio;
