const Usuario = require('../models/usuarios.model');

// ✅ Crear usuario
exports.crearUsuario = async (req, res) => {
  try {
    console.log('📥 Datos recibidos del frontend:', req.body);

    const {
      nombre,
      apellidos = '',
      email,
      contraseña = 'temporal',
      telefono = null,
      rol = 'turista'
    } = req.body;

    if (!nombre || !email) {
      return res.status(400).json({ error: '⚠️ Faltan campos obligatorios (nombre o email)' });
    }

    // 🧩 Verificar si el email ya está registrado
    const emailExistente = await Usuario.findOne({ where: { email } });
    if (emailExistente) {
      return res.status(400).json({ error: '⚠️ El correo electrónico ya está registrado.' });
    }

    // 🧩 Verificar si el nombre ya está registrado
    const nombreExistente = await Usuario.findOne({ where: { nombre } });
    if (nombreExistente) {
      return res.status(400).json({ error: '⚠️ El nombre de usuario ya existe.' });
    }

    // Crear el nuevo usuario si no hay duplicados
    const nuevoUsuario = await Usuario.create({
      nombre,
      apellidos,
      email,
      contraseña,
      telefono,
      rol
    });

    res.status(201).json({
      mensaje: '✅ Usuario creado correctamente',
      usuario: nuevoUsuario
    });

  } catch (error) {
    console.error('❌ Error al crear usuario:', error);

    // ⚠️ Si ocurre un error de restricción única en Sequelize
    if (error.name === 'SequelizeUniqueConstraintError') {
      const campoDuplicado = error.errors?.[0]?.path || 'dato';
      let mensaje = '⚠️ Los datos ya están registrados.';

      if (campoDuplicado.includes('email')) {
        mensaje = '⚠️ El correo electrónico ya está registrado.';
      } else if (campoDuplicado.includes('nombre')) {
        mensaje = '⚠️ El nombre de usuario ya existe.';
      }

      return res.status(400).json({ error: mensaje });
    }

    res.status(500).json({
      error: '❌ Ocurrió un error inesperado al guardar el usuario.'
    });
  }
};

// ✅ Listar todos los usuarios
exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (err) {
    console.error('❌ Error al listar usuarios:', err);
    res.status(500).json({ error: 'Error al listar los usuarios', detalle: err.message });
  }
};

// ✅ Obtener un usuario por ID
exports.obtenerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json(usuario);
  } catch (err) {
    console.error('❌ Error al obtener usuario:', err);
    res.status(500).json({ error: 'Error al obtener el usuario', detalle: err.message });
  }
};

// ✅ Actualizar usuario por ID
exports.actualizarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const { email, nombre } = req.body;

    // 🧩 Verificar duplicados antes de actualizar
    if (email) {
      const emailExistente = await Usuario.findOne({ where: { email } });
      if (emailExistente && emailExistente.id_usuario !== usuario.id_usuario) {
        return res.status(400).json({ error: '⚠️ El correo electrónico ya está registrado por otro usuario.' });
      }
    }

    if (nombre) {
      const nombreExistente = await Usuario.findOne({ where: { nombre } });
      if (nombreExistente && nombreExistente.id_usuario !== usuario.id_usuario) {
        return res.status(400).json({ error: '⚠️ El nombre de usuario ya existe.' });
      }
    }

    await usuario.update(req.body);
    res.status(200).json({ mensaje: '✅ Usuario actualizado correctamente.', usuario });

  } catch (err) {
    console.error('❌ Error al actualizar usuario:', err);
    res.status(500).json({ error: 'Error al actualizar el usuario', detalle: err.message });
  }
};

// 📌 Eliminar un usuario
exports.eliminarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("🧩 ID recibido para eliminar:", id);

    if (!id) {
      return res.status(400).json({ mensaje: 'ID de usuario no proporcionado.' });
    }

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      console.warn(`⚠️ Usuario no encontrado con id: ${id}`);
      return res.status(404).json({ mensaje: 'Usuario no encontrado.' });
    }

    await usuario.destroy();
    console.log(`🗑️ Usuario con ID ${id} eliminado correctamente.`);
    res.status(200).json({ mensaje: `🗑️ Usuario con ID ${id} eliminado correctamente.` });
  } catch (error) {
    console.error('❌ Error al eliminar usuario:', error);
    res.status(500).json({ mensaje: 'Error al eliminar el usuario', error: error.message });
  }
};
