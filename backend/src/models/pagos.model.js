const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Pago extends Model {}

Pago.init({
  id_pago: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_reserva: { type: DataTypes.INTEGER, allowNull: false },
  id_metodo: { type: DataTypes.INTEGER, allowNull: false },
  fecha_pago: { type: DataTypes.DATE, allowNull: false },
  monto: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  estado: { type: DataTypes.ENUM('completado','pendiente','fallido'), allowNull: false }
}, {
  sequelize,
  modelName: 'Pago',
  tableName: 'pagos',
  timestamps: false
});

module.exports = Pago;
