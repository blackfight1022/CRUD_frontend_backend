import React, { useState, useEffect } from "react";
import axios from "axios";
import UsuariosForm from "./components/UsuariosForm";
import "./App.css";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioEditando, setUsuarioEditando] = useState(null);

  // Obtener todos los usuarios del backend
  const fetchUsuarios = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/usuarios");
      setUsuarios(res.data);
    } catch (err) {
      console.error("Error al obtener usuarios:", err);
    }
  };

  // Eliminar usuario
  const eliminarUsuario = async (id_usuario) => {
    if (!window.confirm("¿Seguro que deseas eliminar este usuario?")) return;
    try {
      await axios.delete(`http://localhost:3000/api/usuarios/${id_usuario}`);
      alert("🗑️ Usuario eliminado correctamente");
      fetchUsuarios();
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };

  // Editar usuario
  const editarUsuario = (usuario) => {
    setUsuarioEditando(usuario);
  };

  // Cancelar edición
  const cancelarEdicion = () => {
    setUsuarioEditando(null);
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Gestión de Usuarios</h1>

      {/* Formulario */}
      <UsuariosForm
        onSave={fetchUsuarios}
        usuarioEditando={usuarioEditando}
        cancelarEdicion={cancelarEdicion}
      />

      {/* Tabla de usuarios */}
      <h2>Lista de Usuarios</h2>
      <table
        border="1"
        cellPadding="8"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id_usuario}>
              <td>{u.nombre}</td>
              <td>{u.email}</td>
              <td>{u.rol || "N/A"}</td>
              <td>
                <button
                  onClick={() => editarUsuario(u)}
                  className="btn-primary btn-editar"
                >
                  Editar
                </button>
                <button
                  onClick={() => eliminarUsuario(u.id_usuario)}
                  className="btn-eliminar"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}

          {usuarios.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No hay usuarios registrados
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
