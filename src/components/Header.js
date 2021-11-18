// Libraries
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
      <nav className='header-nav'>
        <h1 className='header-item'>Anywhere Fitness </h1>
        <NavLink className='header-nav-item underline' to='/'>
          Home Page
        </NavLink>
        <NavLink className='header-nav-item underline' to='/login'>
          Login
        </NavLink>
        <NavLink className='header-nav-item underline' to='/signup'>
          Sign Up
        </NavLink>
        <NavLink className='header-nav-item underline' to='/classes'>
          View Classes
        </NavLink>
      </nav>
    </header>

  );
}
