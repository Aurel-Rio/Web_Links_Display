import React from 'react';
import '../navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbarLogo'>
        <h4>Riozacki Admin-links</h4>
      </div>
      <div className='navbarLinks'>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

