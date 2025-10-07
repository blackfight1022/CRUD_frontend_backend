import React, { useState, useEffect } from "react";
import axios from "axios";

function UsuariosForm({ onSave, usuarioEditando, cancelarEdicion }) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    rol: "",
  });

  const [mensaje, setMensaje] = useState(null);
  const [tipoMensaje, setTipoMensaje] = useState("");

  // Cargar datos si estamos editando
  useEffect(() => {
    if (usuarioEditando) {
      setFormData({
        nombre: usuarioEditando.nombre,
        email: usuarioEditando.email,
        rol: usuarioEditando.rol || "",
      });
      setMensaje(null);
    } else {
      setFormData({ nombre: "", email: "", rol: "" });
    }
  }, [usuarioEditando]);

  // Capturar cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Enviar datos al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje(null);

    try {
      if (usuarioEditando) {
        // ✅ Actualizar usuario existente
        await axios.put(
          `http://localhost:3000/api/usuarios/${usuarioEditando.id_usuario}`,
          formData
        );
        setTipoMensaje("exito");
        setMensaje("✅ Usuario actualizado correctamente");
      } else {
        // 🟢 Crear nuevo usuario
        await axios.post("http://localhost:3000/api/usuarios", formData);
        setTipoMensaje("exito");
        setMensaje("✅ Usuario agregado correctamente");
      }

      // Limpiar formulario
      setFormData({ nombre: "", email: "", rol: "" });

      // Recargar lista principal
      onSave();

      // Cerrar modo edición
      if (usuarioEditando) cancelarEdicion();
    } catch (error) {
      console.error("Error al guardar usuario:", error);

      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data.error
      ) {
        setTipoMensaje("alerta");
        setMensaje(error.response.data.error);
      } else {
        setTipoMensaje("error");
        setMensaje("❌ Ocurrió un error al guardar el usuario");
      }
    }

    // Ocultar mensaje después de 5 s
    setTimeout(() => setMensaje(null), 5000);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>{usuarioEditando ? "Editar Usuario" : "Agregar Usuario"}</h2>

      {/* 🔔 Mensaje visual */}
      {mensaje && (
        <div
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            fontWeight: "bold",
            textAlign: "center",
            color:
              tipoMensaje === "exito"
                ? "#155724"
                : tipoMensaje === "alerta"
                ? "#856404"
                : "#721c24",
            backgroundColor:
              tipoMensaje === "exito"
                ? "#d4edda"
                : tipoMensaje === "alerta"
                ? "#fff3cd"
                : "#f8d7da",
            border:
              tipoMensaje === "exito"
                ? "1px solid #c3e6cb"
                : tipoMensaje === "alerta"
                ? "1px solid #ffeeba"
                : "1px solid #f5c6cb",
          }}
        >
          {mensaje}
        </div>
      )}

      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
        style={{
          marginRight: "10px",
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleChange}
        required
        style={{
          marginRight: "10px",
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <input
        type="text"
        name="rol"
        placeholder="Rol"
        value={formData.rol}
        onChange={handleChange}
        style={{
          marginRight: "10px",
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      {/* 🔘 Botón guardar / actualizar */}
      <button
        type="submit"
        style={{
          backgroundColor: "green",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "5px",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        {usuarioEditando ? "Actualizar" : "Guardar"}
      </button>

      {usuarioEditando && (
        <button
          type="button"
          onClick={cancelarEdicion}
          style={{
            backgroundColor: "gray",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Cancelar
        </button>
      )}
    </form>
  );
}

export default UsuariosForm;
