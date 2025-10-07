const Alojamientos = require('./alojamientos.model');
const AlojamientosServicios = require('./alojamientos_servicios.model');
const Anfitriones = require('./anfitriones.model');
const Clientes = require('./clientes.model');
const DisponibilidadAlojamiento = require('./disponibilidad_alojamiento.model');
const HistorialCambios = require('./historial_cambios.model');
const ImagenesAlojamiento = require('./imagenes_alojamiento.model');
const MetodosPago = require('./metodos_pago.model');
const Pagos = require('./pagos.model');
const PoliticasCancelacion = require('./politicas_cancelacion.model');
const Reservas = require('./reservas.model');
const Reseñas = require('./reseñas.model');
const Servicios = require('./servicios.model');
const TipoAlojamiento = require('./tipo_alojamiento.model');
const Ubicaciones = require('./ubicaciones.model');
const Usuarios = require('./usuarios.model');

module.exports = { Alojamientos, AlojamientosServicios, Anfitriones, Clientes, DisponibilidadAlojamiento, HistorialCambios, ImagenesAlojamiento, MetodosPago, Pagos, PoliticasCancelacion, Reservas, Reseñas, Servicios, TipoAlojamiento, Ubicaciones, Usuarios };