import React from 'react';
import './Login.css'; // Importa el archivo CSS
import { useNavigate } from 'react-router-dom'; // Para la redirección

const Login = () => {
  const navigate = useNavigate(); // Hook para navegar

  const handleLogin = (event) => {
    event.preventDefault();
    // Lógica de validación (opcional)
    navigate('/loading'); // Redirige a la pantalla de carga
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <img
            src="/LogoLogin.png" 
            alt="Logo" 
            className="login-logo" 
          />
          <h1>Bienvenido a su Sistema de Inventario</h1>
          <p>Ingresa tu Usuario y Contraseña para continuar</p>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Ingresa tu usuario"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <button type="submit" className="login-button">
            Ingresar
          </button>
        </form>
      </div>
      <div className="login-image">
        <img src="/LoginBackgroung.png" alt="Inventario" className="inventory-img" />
      </div>
    </div>
  );
};

export default Login;
