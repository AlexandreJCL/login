// LoadingPage.js
import React, { useState, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSignOutAlt, faDollarSign, faChartLine, faShoppingCart, faUsers, faBox, faWarehouse, faBell } from '@fortawesome/free-solid-svg-icons';
import './LoadingPage.css';

const ProductTable = lazy(() => import('./ProductTable'));
const SalesPage = lazy(() => import('./SalesPage'));
const ClientesTable = lazy(() => import('./ClientesTable'));

const LoadingPage = () => {
  const navigate = useNavigate();
  const [mainContent, setMainContent] = useState(<p>Bienvenido a la página principal</p>);
  const [mainTitle, setMainTitle] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (content, title) => {
    setMainContent(content);
    setMainTitle(title);
    setMenuOpen(false); // Cierra el menú al navegar en móviles
  };

  const handleLogout = () => {
    navigate('/'); // Redirige a la ruta de Login
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna la visibilidad de la barra lateral en móviles
  };

  return (
    <div className="container">
      {/* Botón para dispositivos móviles */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>

      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="logo">
          <img src="/LogoLogin.png" alt="Site Control" />
          <h1>SITE Control</h1>
        </div>
        <nav className="sidebar-nav">
          <details open>
            <summary>Administrador</summary>
            <ul>
              <li>
                <button className="nav-button" onClick={() => handleNavigation(<p>Ganancias</p>, 'Ganancias')}>
                  <FontAwesomeIcon icon={faDollarSign} /> Ganancias
                </button>
              </li>
              <li>
                <button className="nav-button" onClick={() => handleNavigation(<p>Reporte de ventas</p>, 'Reporte de ventas')}>
                  <FontAwesomeIcon icon={faChartLine} /> Reporte de ventas
                </button>
              </li>
            </ul>
          </details>

          <details>
            <summary>Ventas</summary>
            <ul>
              <li>
                <button className="nav-button" onClick={() => handleNavigation(<ProductTable />, 'Ver productos')}>
                  <FontAwesomeIcon icon={faShoppingCart} /> Ver productos
                </button>
              </li>
              <li>
                <button className="nav-button" onClick={() => handleNavigation(<SalesPage />, 'Ventas')}>
                  <FontAwesomeIcon icon={faChartLine} /> Ventas
                </button>
              </li>
              <li>
                <button className="nav-button" onClick={() => handleNavigation(<ClientesTable />, 'Clientes')}>
                  <FontAwesomeIcon icon={faUsers} /> Clientes
                </button>
              </li>
            </ul>
          </details>

          <details>
            <summary>Almacén</summary>
            <ul>
              <li>
                <button className="nav-button" onClick={() => handleNavigation(<ProductTable />, 'Productos')}>
                  <FontAwesomeIcon icon={faBox} /> Productos
                </button>
              </li>
              <li>
                <button className="nav-button" onClick={() => handleNavigation(<p>Proveedores</p>, 'Proveedores')}>
                  <FontAwesomeIcon icon={faWarehouse} /> Proveedores
                </button>
              </li>
            </ul>
          </details>
        </nav>

        {/* Botón de Cerrar sesión */}
        <div className="logout-section">
          <button className="logout-button" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Cerrar sesión
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="header">
          <div className="header-info">
            <span className="main-title">{mainTitle}</span>
          </div>
          <div className="header-icons">
            <button className="icon-button">
              <FontAwesomeIcon icon={faUsers} />
            </button>
            <button className="icon-button">
              <FontAwesomeIcon icon={faBell} />
            </button>
          </div>
        </header>
        <section className="content">
          <div className="loading-box">
            <Suspense fallback={<div>Cargando...</div>}>
              {mainContent}
            </Suspense>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoadingPage;
