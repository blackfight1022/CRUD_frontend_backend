const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class TipoAlojamiento extends Model {}

TipoAlojamiento.init({
  id_tipo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING(50), allowNull: false },
  descripcion: { type: DataTypes.TEXT }
}, {
  sequelize,
  modelName: 'TipoAlojamiento',
  tableName: 'tipo_alojamiento',
  timestamps: false
});

module.exports = TipoAlojamiento;
