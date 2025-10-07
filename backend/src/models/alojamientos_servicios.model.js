const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class AlojamientosServicios extends Model {}

AlojamientosServicios.init({
  id_alojamiento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  id_servicio: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'AlojamientosServicios',
  tableName: 'alojamientos_servicios',
  timestamps: false
});

module.exports = AlojamientosServicios;
