import './App.css';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
import { useProducts } from './Hook/UseProducts.js';
import { Products } from './Components/Products.jsx';
import { useEffect, useState, useRef } from 'react';
import LoginPage from './Components/LoginPage.jsx';
import RegisterPage from './Components/RegisterPage.jsx'; // Asegúrate de crear este componente

function useSearch() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = false;
      return;
    }

    if (search === '') {
      setError('No se puede buscar un producto vacío');
      return;
    }

    if (search.match(/^\d+$/)) {
      setError('La búsqueda no puede contener solo números');
      return;
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres');
      return;
    }
    setError(null);
  }, [search]);

  return { search, setSearch, error };
}

function SearchPage() {
  const { search, setSearch, error } = useSearch();
  const { products } = useProducts({ search });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Productos</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} placeholder='Jabón, Shampoo, Goku...' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Products products={products} />
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Registrarse</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
