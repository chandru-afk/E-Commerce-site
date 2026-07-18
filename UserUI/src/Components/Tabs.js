import React, { useState } from 'react';
import './Tabs.css'; // Ensure this path is correct
import UserTable from './UserTable'; // Import UserTable from src
import Products from './Products';
import Cart from './Cart';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [cart, setCart] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <h2 
          className={activeTab === 'products' ? 'active' : ''} 
          onClick={() => handleTabClick('products')}
        >
          Products
        </h2>
        <div className="right-tabs">
          <h2 
            className={activeTab === 'cart' ? 'active' : ''} 
            onClick={() => handleTabClick('cart')}
          >
            Cart
          </h2>
          <h2 
            className={activeTab === 'user' ? 'active' : ''} 
            onClick={() => handleTabClick('user')}
          >
            User
          </h2>
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 'products' && <Products onAddToCart ={handleAddToCart}/>}
        {activeTab === 'cart' && <Cart items={cart} />}
        {activeTab === 'user' && <UserTable />} {/* Render UserTable when 'user' tab is active */}
      </div>
    </div>
  );
};


export default Tabs;
