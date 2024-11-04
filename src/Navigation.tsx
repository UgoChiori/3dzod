import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navigation.css";

const Navigation: React.FC = () => {
  return (
    <div className='nav'>
      <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink to='/login' className={({ isActive }) => (isActive ? 'active' : '')}>
        Login
      </NavLink>
      <NavLink to='/register' className={({ isActive }) => (isActive ? 'active' : '')}>
        Register
      </NavLink>
    </div>
  );
};

export default Navigation;
