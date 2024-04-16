import './Register.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../Users-File/AuthService';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Estado para manejar mensajes de error
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await registerUser(username, email, password);
      navigate('/login'); // Redirige al login tras un registro exitoso
    } catch (error) {
      console.error(error.message); // Manejar errores, como usuario existente
    }
  };

  return (
    <div className="register-container">
      <div>
      <h2>Crear Cuenta</h2>
      </div>
      <form onSubmit={handleRegister}>
        <div className="">
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Usuario"
            required
          />
        </div>
        <div className="">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="">
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
          <button type="submit" className="register-btn">Registrar</button>
        </div>
    </div>
  );
}

export default RegisterPage;


