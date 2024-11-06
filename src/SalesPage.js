import React, { useState } from 'react';
import './SalesPage.css';
// Importa tus iconos desde la librería de iconos que estás utilizando
import { FaSearch, FaArrowLeft, FaArrowRight, FaTimes, FaPlus, FaMinus } from 'react-icons/fa';

const SalesPage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'CE') {
      setInputValue(''); // Clear the input
    } else if (value === 'ENTER') {
      console.log('Entered value:', inputValue);
    } else {
      setInputValue((prev) => prev + value); // Append the value to the current input
    }
  };

  return (
    <div className="sales-page">
      {/* Product Table */}
      <div className="product-table">
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Artículo</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr key={index}>
                <td><input type="checkbox" /></td>
                <td>Producto {index + 1}</td>
                <td>$10.00</td>
                <td>2</td>
                <td>$20.00</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Numeric Keypad */}
      <div className="keypad-container">
        <input type="text" className="input-display" value={inputValue} readOnly />
        <div className="keypad">
          <button onClick={() => handleButtonClick('CE')} className="key ce"><FaTimes /></button>
          <button onClick={() => handleButtonClick('*')}><FaTimes /></button>
          <button onClick={() => handleButtonClick('-')}><FaMinus /></button>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('+')} className="plus"><FaPlus /></button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('ENTER')} className="enter">ENTER</button>
          <button onClick={() => handleButtonClick('0')} className="zero">0</button>
          <button onClick={() => handleButtonClick('.')} className="dot">.</button>
        </div>
      </div>

      {/* Categories and Search */}
      <div className="categories-container">
        <div className="categories">
          <button>Otros</button>
          <button>Refrescos</button>
          <button>Enlatados</button>
          <button>Básicos</button>
        </div>
        <div className="product-search">
          <input type="text" placeholder="Buscar producto" />
          <button><FaSearch /></button>
        </div>
      </div>

      {/* Product Display */}
      <div className="product-display">
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Código de Barra</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ejemplo 1</td>
              <td>123456789</td>
              <td>$15.00</td>
            </tr>
            <tr>
              <td>Ejemplo 2</td>
              <td>987654321</td>
              <td>$20.00</td>
            </tr>
          </tbody>
        </table>
        <div className="arrows">
          <button><FaArrowLeft /></button>
          <button><FaArrowRight /></button>
        </div>
      </div>

      {/* Total Section */}
      <div className="total-section">
        <span>Total:</span>
        <input type="text" className="total-input" readOnly />
      </div>
    </div>
  );
};

export default SalesPage;
