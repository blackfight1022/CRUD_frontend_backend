const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Reserva extends Model {}

Reserva.init({
  id_reserva: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_cliente: { type: DataTypes.INTEGER, allowNull: false },
  id_alojamiento: { type: DataTypes.INTEGER, allowNull: false },
  fecha_inicio: { type: DataTypes.DATEONLY, allowNull: false },
  fecha_fin: { type: DataTypes.DATEONLY, allowNull: false },
  estado: { type: DataTypes.ENUM('confirmada','pendiente','cancelada'), allowNull: false },
  fecha_creacion: { type: DataTypes.DATE, allowNull: false }
}, {
  sequelize,
  modelName: 'Reserva',
  tableName: 'reservas',
  timestamps: false
});

module.exports = Reserva;
