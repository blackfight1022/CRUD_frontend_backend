const express = require('express');
const cors = require('cors');
const app = express();

// ✅ Habilitar CORS para permitir conexión con el frontend
app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// Importar rutas
const alojamientosRoutes = require('./routes/alojamientos.routes');
app.use('/api/alojamientos', alojamientosRoutes);

const alojamientos_serviciosRoutes = require('./routes/alojamientos_servicios.routes');
app.use('/api/alojamientos_servicios', alojamientos_serviciosRoutes);

const anfitrionesRoutes = require('./routes/anfitriones.routes');
app.use('/api/anfitriones', anfitrionesRoutes);

const clientesRoutes = require('./routes/clientes.routes');
app.use('/api/clientes', clientesRoutes);

const disponibilidad_alojamientoRoutes = require('./routes/disponibilidad_alojamiento.routes');
app.use('/api/disponibilidad_alojamiento', disponibilidad_alojamientoRoutes);

const historial_cambiosRoutes = require('./routes/historial_cambios.routes');
app.use('/api/historial_cambios', historial_cambiosRoutes);

const imagenes_alojamientoRoutes = require('./routes/imagenes_alojamiento.routes');
app.use('/api/imagenes_alojamiento', imagenes_alojamientoRoutes);

const metodos_pagoRoutes = require('./routes/metodos_pago.routes');
app.use('/api/metodos_pago', metodos_pagoRoutes);

const pagosRoutes = require('./routes/pagos.routes');
app.use('/api/pagos', pagosRoutes);

const politicas_cancelacionRoutes = require('./routes/politicas_cancelacion.routes');
app.use('/api/politicas_cancelacion', politicas_cancelacionRoutes);

const reservasRoutes = require('./routes/reservas.routes');
app.use('/api/reservas', reservasRoutes);

const resenasRoutes = require('./routes/resenas.routes');
app.use('/api/reseñas', resenasRoutes);

const serviciosRoutes = require('./routes/servicios.routes');
app.use('/api/servicios', serviciosRoutes);

const tipo_alojamientoRoutes = require('./routes/tipo_alojamiento.routes');
app.use('/api/tipo_alojamiento', tipo_alojamientoRoutes);

const ubicacionesRoutes = require('./routes/ubicaciones.routes');
app.use('/api/ubicaciones', ubicacionesRoutes);

const usuariosRoutes = require('./routes/usuarios.routes');
app.use('/api/usuarios', usuariosRoutes);

// Endpoint simple de verificación
app.get('/health', (req, res) => res.json({ status: 'ok' }));

module.exports = app;
