import React, { useState } from 'react';
import './Tabs.css'; // Ensure this path is correct
import UserTable from './UserTable'; // Import UserTable from src
import Products from './Products';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('products');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
        {activeTab === 'products' && <Products />}
        {activeTab === 'cart' && <Cart />}
        {activeTab === 'user' && <UserTable />} {/* Render UserTable when 'user' tab is active */}
      </div>
    </div>
  );
};

const Cart = () => (
  <div>
    <h3>Cart Content</h3>
    {/* Cart details */}
  </div>
);

export default Tabs;
