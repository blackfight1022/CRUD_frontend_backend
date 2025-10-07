const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class PoliticaCancelacion extends Model {}

PoliticaCancelacion.init({
  id_politica: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  descripcion: { type: DataTypes.TEXT, allowNull: false },
  penalizacion: { type: DataTypes.DECIMAL(5,2), allowNull: false },
  dias_previos: { type: DataTypes.INTEGER, allowNull: false }
}, {
  sequelize,
  modelName: 'PoliticaCancelacion',
  tableName: 'politicas_cancelacion',
  timestamps: false
});

module.exports = PoliticaCancelacion;
