import './Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Users-File/AuthService'; // Asegúrate de que la ruta sea correcta

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Estado para errores
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await loginUser(username, password);
      navigate('/'); // Navega a la página principal si el login es exitoso
    } catch (error) {
      console.error(error.message); // Manejar errores, como credenciales incorrectas
    }
  };
  

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Usuario"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
      </form>
      <div className='divboton'>
            <button type="submit" className="login-btn">Iniciar sesión</button>
        </div>
    </div>
  );
}

export default LoginPage;
