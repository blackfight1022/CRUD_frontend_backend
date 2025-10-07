const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class MetodoPago extends Model {}

MetodoPago.init({
  id_metodo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING(50), allowNull: false },
  descripcion: { type: DataTypes.TEXT }
}, {
  sequelize,
  modelName: 'MetodoPago',
  tableName: 'metodos_pago',
  timestamps: false
});

module.exports = MetodoPago;
