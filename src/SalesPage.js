import React, { useState } from 'react';
import './SalesPage.css';
import { FaPlus, FaMinus, FaPrint } from 'react-icons/fa';

const SalesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [quantities, setQuantities] = useState(Array(10).fill(1)); // Estado para las cantidades de los productos

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    // Aquí podrías cargar productos según la categoría seleccionada
  };

  const handleQuantityChange = (index, action) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      if (action === 'increase') {
        newQuantities[index] = newQuantities[index] + 1;
      } else if (action === 'decrease' && newQuantities[index] > 1) {
        newQuantities[index] = newQuantities[index] - 1;
      }
      return newQuantities;
    });
  };

  return (
    <div className="sales-page">
      {/* Tabla de productos */}
      <div className="product-table">
        <table>
          <thead>
            <tr>
              <th> </th>
              <th>Artículo</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {quantities.map((quantity, index) => (
              <tr key={index}>
                <td><input type="checkbox" /></td>
                <td>Producto {index + 1}</td>
                <td>$10.00</td>
                <td className="quantity-cell">
                  <button className="minus-btn" onClick={() => handleQuantityChange(index, 'decrease')}><FaMinus /></button>
                  <span>{quantity}</span>
                  <button className="plus-btn" onClick={() => handleQuantityChange(index, 'increase')}><FaPlus /></button>
                </td>
                <td>${(quantity * 10).toFixed(2)}</td> {/* Actualiza el subtotal según la cantidad */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sección de selección de categoría y botón de imprimir */}
      <div className="controls-container">
        <select className="category-select" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Seleccionar categoría</option>
          <option value="cosmeticos">Cosméticos</option>
          <option value="bebidas">Bebidas</option>
          <option value="alimentos">Alimentos</option>
          <option value="ropa">Ropa</option>
        </select>
        <button className="cancel-btn">Cancelar</button>
        <button className="print-btn"><FaPrint /> Imprimir</button>
        <span className="total-text">Total:</span>
        <input type="text" className="total-input" readOnly value={`$${(quantities.reduce((acc, qty) => acc + qty, 0) * 10).toFixed(2)}`} />
      </div>
    </div>
  );
};

export default SalesPage;
