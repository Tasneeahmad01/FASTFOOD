import React, { useState } from 'react';
import './OrderPage.css';

const OrderPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [order, setOrder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Order placed by: ${name}, ${email}, ${address}, Order: ${order}`);
  };

  return (
    <div className="order-page">
      <h1>Place Your Order</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </label>
        <label>
          Email:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
        <label>
          Address:
          <input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
        </label>
        <label>
          Order Details:
          <textarea 
            value={order} 
            onChange={(e) => setOrder(e.target.value)} 
            required 
          />
        </label>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default OrderPage;
