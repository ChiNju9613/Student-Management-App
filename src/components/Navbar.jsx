// src/components/Navbar.jsx
import React from 'react';
import logo from '../assets/logo.png'; // Put your logo in src/assets

const Navbar = ({ onAddStudent }) => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" width={40} />
        <h2>Student Management</h2>
      </div>
      <button onClick={onAddStudent}>Add Student</button>
    </nav>
  );
};

export default Navbar
