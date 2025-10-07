const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Resena extends Model {}

Resena.init({
  id_resena: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_cliente: { type: DataTypes.INTEGER, allowNull: false },
  id_alojamiento: { type: DataTypes.INTEGER, allowNull: false },
  puntuacion: { type: DataTypes.INTEGER, validate: { min: 1, max: 5 } },
  comentario: { type: DataTypes.TEXT },
  fecha: { type: DataTypes.DATEONLY, allowNull: false }
}, {
  sequelize,
  modelName: 'Resena',
  tableName: 'reseñas',
  timestamps: false
});

module.exports = Resena;
