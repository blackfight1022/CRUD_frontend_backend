const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Usuario extends Model {}

Usuario.init({
  id_usuario: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  nombre: { 
    type: DataTypes.STRING(100), 
    allowNull: false 
  },
  apellidos: { 
    type: DataTypes.STRING(150), 
    allowNull: false, 
    defaultValue: '' // Valor por defecto si no se envía desde el frontend
  },
  email: { 
    type: DataTypes.STRING(150), 
    allowNull: false, 
    unique: true 
  },
  contraseña: { 
    type: DataTypes.STRING(255), 
    allowNull: false, 
    defaultValue: 'temporal' // Valor temporal por defecto
  },
  telefono: { 
    type: DataTypes.STRING(20), 
    allowNull: true, 
    defaultValue: null 
  },
  fecha_registro: { 
    type: DataTypes.DATEONLY, 
    allowNull: false, 
    defaultValue: DataTypes.NOW // Asigna automáticamente la fecha actual
  },
  rol: { 
    type: DataTypes.ENUM('turista', 'anfitrion', 'administrador'), 
    allowNull: false, 
    defaultValue: 'turista' // Asigna rol "turista" por defecto
  }
}, {
  sequelize,
  modelName: 'Usuario',
  tableName: 'usuarios',
  timestamps: false
});

module.exports = Usuario;
