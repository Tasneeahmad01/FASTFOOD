

// import React, { useState } from 'react';

// const OrderPage = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [order, setOrder] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`Order placed by: ${name}, Email: ${email}, Address: ${address}, Order: ${order}`);
//   };

//   return (
//     <div className="order-page">
//       <h1>Place Your Order</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input 
//             type="text" 
//             value={name} 
//             onChange={(e) => setName(e.target.value)} 
//             required 
//           />
//         </label>
//         <label>
//           Email:
//           <input 
//             type="email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             required 
//           />
//         </label>
//         <label>
//           Address:
//           <input 
//             type="text" 
//             value={address} 
//             onChange={(e) => setAddress(e.target.value)} 
//             required 
//           />
//         </label>
//         <label>
//           Order Details:
//           <textarea 
//             value={order} 
//             onChange={(e) => setOrder(e.target.value)} 
//             required 
//           />
//         </label>
//         <button type="submit" className='Butt'>Submit Order</button>
//       </form>
//     </div>
//   );
// };

// export default OrderPage;


import React from 'react';
const OrderForm = () => {
  return (
    <div style={styles.container} className='But'>
      <h2>Online Order Form</h2>
      <p>Please fill in the order form below with the items you want to purchase from our store. Thank you for choosing our services!</p>
      <form style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="firstName">Name:<span style={styles.required}>*</span></label>
          <div style={styles.nameContainer}>
            <input type="text" id="firstName" name="firstName" placeholder="First" style={styles.nameInput} required />
            <input type="text" id="lastName" name="lastName" placeholder="Last" style={styles.nameInput} required />
          </div>
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="phone">Phone:<span style={styles.required}>*</span></label>
          <input type="tel" id="phone" name="phone" placeholder="### ### ####" style={styles.input} required />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="email">Email:<span style={styles.required}>*</span></label>
          <input type="email" id="email" name="email" style={styles.input} required />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="address">Delivery Address:<span style={styles.required}>*</span></label>
          <input type="text" id="address" name="address" placeholder="Street Address" style={styles.input} required />&nbsp;
          <input type="text" id="address2" name="address2" placeholder="Street Address Line 2" style={styles.input} />
        </div>
        <button style={styles.button}>Order Now</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    width: '50%',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop:'20px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  nameContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  nameInput: {
    flex: '1',
    marginRight: '10px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  required: {
    color: 'red',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '15px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    borderRadius:'30px',
    fontSize: '1.2em',
    transition: 'background-color 0.3s ease-in-out',
  },
  
};

export default OrderForm;
