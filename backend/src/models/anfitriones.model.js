const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Anfitrion extends Model {}

Anfitrion.init({
  id_anfitrion: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_usuario: { type: DataTypes.INTEGER, allowNull: false },
  calificacion_promedio: { type: DataTypes.DECIMAL(3,2) },
  num_alojamientos: { type: DataTypes.INTEGER, defaultValue: 0 }
}, {
  sequelize,
  modelName: 'Anfitrion',
  tableName: 'anfitriones',
  timestamps: false
});

module.exports = Anfitrion;
