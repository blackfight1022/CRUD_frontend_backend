const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Alojamiento extends Model {}

Alojamiento.init({
  id_alojamiento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_anfitrion: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_tipo: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_ubicacion: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT
  },
  precio_noche: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  capacidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fecha_publicacion: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  estado: {
    type: DataTypes.ENUM('activo', 'inactivo'),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Alojamiento',
  tableName: 'alojamientos',
  timestamps: false
});

module.exports = Alojamiento;
