const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class HistorialCambio extends Model {}

HistorialCambio.init({
  id_historial: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  entidad_afectada: { type: DataTypes.STRING(50), allowNull: false },
  id_registro: { type: DataTypes.INTEGER, allowNull: false },
  fecha_modificacion: { type: DataTypes.DATE, allowNull: false },
  usuario_modifico: { type: DataTypes.INTEGER, allowNull: false },
  descripcion: { type: DataTypes.TEXT }
}, {
  sequelize,
  modelName: 'HistorialCambio',
  tableName: 'historial_cambios',
  timestamps: false
});

module.exports = HistorialCambio;
