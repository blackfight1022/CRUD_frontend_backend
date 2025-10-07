// 📌 Importar dependencias principales
const app = require('./app');                // Tu configuración de Express
const sequelize = require('./config/database'); // Conexión a la base de datos
require('dotenv').config();                  // Carga las variables del archivo .env

// 📌 Puerto del servidor (usa el de .env o 3000 por defecto)
const PORT = process.env.PORT || 3000;

// 📌 Función autoejecutable para conectar BD y arrancar el servidor
(async () => {
  try {
    // Probar conexión a la base de datos
    await sequelize.authenticate();
    console.log('✅ Conexión exitosa con la base de datos');

    // Sincronizar modelos (opcional: { alter: true } si haces cambios)
    await sequelize.sync();
    console.log('🧩 Modelos sincronizados correctamente');

    // Iniciar servidor Express
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error('❌ Error al conectar o iniciar el servidor:', error.message);
  }
})();
