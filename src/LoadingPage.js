import React, { useState, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faShoppingCart, faClipboardList, faUsers, faDollarSign, faChartLine, faWarehouse, faBell, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './LoadingPage.css';

const ProductTable = lazy(() => import('./ProductTable'));
const SalesPage = lazy(() => import('./SalesPage'));
const ClientesTable = lazy(() => import('./ClientesTable'));

const LoadingPage = () => {
  const navigate = useNavigate();
  const [mainContent, setMainContent] = useState(<p>Bienvenido a la página principal</p>);
  const [mainTitle, setMainTitle] = useState('Página principal');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (content, title) => {
    setMainContent(content);
    setMainTitle(title);
    setMenuOpen(false); // Cierra el menú al navegar en móviles
  };

  const handleInventoryClick = () => {
    navigate('/inventario');
    setMainTitle(' Inventario');
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
                <button className="nav-button" onClick={() => handleNavigation(<p>Ganancias</p>, 'Main / Ganancias')}>
                  <FontAwesomeIcon icon={faDollarSign} /> Ganancias
                </button>
              </li>
              <li>
                <button className="nav-button" onClick={() => handleNavigation(<p>Reporte de ventas</p>, 'Main / Reporte de ventas')}>
                  <FontAwesomeIcon icon={faChartLine} /> Reporte de ventas
                </button>
              </li>
            </ul>
          </details>

          <details>
            <summary>Ventas</summary>
            <ul>
              <li>
                <button className="nav-button" onClick={() => handleNavigation(<ProductTable />, 'Main / Ver productos')}>
                  <FontAwesomeIcon icon={faShoppingCart} /> Ver productos
                </button>
              </li>
              <li>
                <button className="nav-button" onClick={() => handleNavigation(<SalesPage />, 'Main / Ventas')}>
                  <FontAwesomeIcon icon={faClipboardList} /> Ventas
                </button>
              </li>
              <li>
                <button className="nav-button" onClick={() => handleNavigation(<ClientesTable />, 'Main / Clientes')}>
                  <FontAwesomeIcon icon={faUsers} /> Clientes
                </button>
              </li>
            </ul>
          </details>

          <details>
            <summary>Almacén</summary>
            <ul>
              <li>
                <button className="nav-button" onClick={() => handleNavigation(<ProductTable />, 'Main / Productos')}>
                  <FontAwesomeIcon icon={faBox} /> Productos
                </button>
              </li>
              <li>
                <button className="nav-button" onClick={() => handleNavigation(<p>Proveedores</p>, 'Main / Proveedores')}>
                  <FontAwesomeIcon icon={faWarehouse} /> Proveedores
                </button>
              </li>
              <li>
                <button className="nav-button" onClick={handleInventoryClick}>
                  <FontAwesomeIcon icon={faClipboardList} /> Inventario
                </button>
              </li>
            </ul>
          </details>
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
          <div className="header-info">
            <span className="main-title">{mainTitle}</span>
          </div>
          <div className="header-icons">
            <button className="icon-button" onClick={() => console.log('User clicked')}>
              <FontAwesomeIcon icon={faUsers} />
            </button>
            <button className="icon-button" onClick={() => console.log('Notifications clicked')}>
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
