import React, { useState } from 'react';
import './SalesPage.css';

const SalesPage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'CE') {
      setInputValue(''); // Clear the input
    } else if (value === 'ENTER') {
      // Handle enter logic here (e.g., submit the value or perform an action)
      console.log('Entered value:', inputValue);
    } else {
      setInputValue((prev) => prev + value); // Append the value to the current input
    }
  };

  return (
    <div className="sales-container">
      {/* Tabla de productos con checkboxes */}
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
            <tr>
              <td><input type="checkbox" /></td>
              <td>Producto A</td>
              <td>$10.00</td>
              <td>2</td>
              <td>$20.00</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>Producto B</td>
              <td>$15.00</td>
              <td>1</td>
              <td>$15.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Teclado numérico */}
      <div className="num-pad">
        <input type="text" className="input-display" value={inputValue} readOnly />
        <div className="pad">
          <button onClick={() => handleButtonClick('CE')} className="ce">CE</button>
          <button onClick={() => handleButtonClick('x')}>*</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('+')} className="plus">+</button>
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

      {/* Categorías de productos */}
      <div className="categories">
        <button>Otros</button>
        <button>Refrescos</button>
        <button>Enlatados</button>
        <button>Básicos</button>
      </div>

      {/* Visualización de productos */}
      <div className="product-display">
        <button>Avon</button>
      </div>

      {/* Total */}
      <div className="total">
        <span>Total:</span>
        <input type="text" className="total-input" readOnly />
      </div>
    </div>
  );
};

export default SalesPage;
