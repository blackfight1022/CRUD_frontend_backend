/**
 * Archivo de conexión a la base de datos MySQL usando Sequelize.
 * 
 * Este módulo establece la conexión entre la aplicación backend y 
 * la base de datos definida en el archivo .env
 */

const { Sequelize } = require('sequelize');
require('dotenv').config();

// Configuración de conexión usando variables del .env
const sequelize = new Sequelize(
  process.env.DB_NAME,  // Nombre de la base de datos
  process.env.DB_USER,  // Usuario de la base de datos
  process.env.DB_PASS,  // Contraseña
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',           // Puedes cambiar a 'postgres' si usas PostgreSQL
    logging: false,             // Cambia a true para ver las consultas SQL en consola
    define: {
      freezeTableName: true     // Evita que Sequelize pluralice los nombres de tabla
    }
  }
);

// Exportamos la instancia de Sequelize para usarla en modelos y servidor
module.exports = sequelize;
