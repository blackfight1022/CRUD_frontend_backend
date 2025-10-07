const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class ImagenAlojamiento extends Model {}

ImagenAlojamiento.init({
  id_imagen: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_alojamiento: { type: DataTypes.INTEGER, allowNull: false },
  url_imagen: { type: DataTypes.STRING(255), allowNull: false },
  descripcion: { type: DataTypes.TEXT }
}, {
  sequelize,
  modelName: 'ImagenAlojamiento',
  tableName: 'imagenes_alojamiento',
  timestamps: false
});

module.exports = ImagenAlojamiento;
