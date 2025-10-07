const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class DisponibilidadAlojamiento extends Model {}

DisponibilidadAlojamiento.init({
  id_disponibilidad: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_alojamiento: { type: DataTypes.INTEGER, allowNull: false },
  fecha: { type: DataTypes.DATEONLY, allowNull: false },
  estado: { type: DataTypes.ENUM('libre','ocupado'), allowNull: false }
}, {
  sequelize,
  modelName: 'DisponibilidadAlojamiento',
  tableName: 'disponibilidad_alojamiento',
  timestamps: false
});

module.exports = DisponibilidadAlojamiento;
