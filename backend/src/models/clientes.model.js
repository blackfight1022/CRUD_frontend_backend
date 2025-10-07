const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Cliente extends Model {}

Cliente.init({
  id_cliente: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_usuario: { type: DataTypes.INTEGER, allowNull: false },
  historial_reservas: { type: DataTypes.TEXT },
  metodo_pago_preferido: { type: DataTypes.INTEGER }
}, {
  sequelize,
  modelName: 'Cliente',
  tableName: 'clientes',
  timestamps: false
});

module.exports = Cliente;
