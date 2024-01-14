import React from 'react';

const Footer = () => {
  return (
    <footer className=' px-12 py-20 bg-slate-300 mt-4'>
      <div className=' flex items-center justify-between gap-2'>
        <div className=' font-medium'>
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className=' font-medium'>
          <h3>Follow Us</h3>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
        <div className=' font-medium'>
          <h3>Address</h3>
          <p>1234 Main Street</p>
          <p>Cityville, State, 12345</p>
        </div>
      </div>
      <div className=' font-medium italic'>
        <p>&copy; 2024 D-AFYA. Secured for all.</p>
      </div>
    </footer>
  );
};


export default Footer;
