import React, { useState, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faShoppingCart, faClipboardList, faUsers, faDollarSign, faChartLine, faWarehouse, faBell } from '@fortawesome/free-solid-svg-icons';
import './LoadingPage.css';

// Carga diferida de componentes
const ProductTable = lazy(() => import('./ProductTable')); // Asegúrate de que la ruta sea correcta
const SalesPage = lazy(() => import('./SalesPage'));

const LoadingPage = () => {
  const navigate = useNavigate();
  const [mainContent, setMainContent] = useState(<p>Bienvenido a la página principal</p>);
  const [mainTitle, setMainTitle] = useState('Main / Página principal');

  const handleNavigation = (content, title) => {
    setMainContent(content);
    setMainTitle(title);
  };

  const handleInventoryClick = () => {
    navigate('/inventario');
    setMainTitle('Main / Inventario');
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <img src="/LogoLogin.png" alt="Site Control" />
          <h1>SITE Control</h1>
        </div>
        <nav className="sidebar-nav">
          <h2>Administrador</h2>
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

          <h2>Ventas</h2>
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
              <button className="nav-button" onClick={() => handleNavigation(<p>Clientes</p>, 'Main / Clientes')}>
                <FontAwesomeIcon icon={faUsers} /> Clientes
              </button>
            </li>
          </ul>

          <h2>Almacén</h2>
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
        </nav>
      </aside>

      {/* Main Section */}
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
