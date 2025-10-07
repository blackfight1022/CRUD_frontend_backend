const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Ubicacion extends Model {}

Ubicacion.init({
  id_ubicacion: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  ciudad: { type: DataTypes.STRING(100), allowNull: false },
  region: { type: DataTypes.STRING(100), allowNull: false },
  pais: { type: DataTypes.STRING(100), allowNull: false },
  codigo_postal: { type: DataTypes.STRING(10) }
}, {
  sequelize,
  modelName: 'Ubicacion',
  tableName: 'ubicaciones',
  timestamps: false
});

module.exports = Ubicacion;
