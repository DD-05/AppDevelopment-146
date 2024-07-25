// src/components/NavBar.js
import React from 'react';
import '../assets/css/header.css'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/'>Orders</a>
        </li>
        <li>
          <a href='/'>Inventory</a>
        </li>
        <li>
          <a href='/'>Reports</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
