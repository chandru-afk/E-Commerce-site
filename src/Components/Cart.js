import React from 'react';

const Cart = ({ items }) => {
  if (items.length === 0) return <p>Your cart is empty.</p>;

  const handlecheckout= ()=>{

  }

  return (
    <div>
      <h3>Cart</h3>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <img src={item.imageUrl} alt={item.name} style={{ width: '100px', height: 'auto' }} />
              </td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handlecheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
