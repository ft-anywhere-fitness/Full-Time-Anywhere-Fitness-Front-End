import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm'

export default function Header(){
    return(
<<<<<<< HEAD
        <header className= 'header'>
            <nav className='header-nav'>
                <h1 className='header-nav-item'>Anywhere Fitness</h1>
                <NavLink  className='header-nav-item underline'  to='/login'>
=======
        <header>
            <nav>
                <h1 className='header-item'>Anywhere Fitness </h1>
                <NavLink className='header-item underline' to='/'>
                   Home Page
                </NavLink>
                <NavLink  className='header-item underline'  to='/login'>
>>>>>>> 1a7253e81d2081581670c439955627b7dc2d402f
                    Login
                </NavLink>
                <NavLink className='header-nav-item underline' to='/signup'>
                   Sign Up
                </NavLink>
                <NavLink className='header-item underline' to='/classes'>
                   View Classes
                </NavLink>
            </nav>
       

        </header>

    )
}

// NavLink to = '/signup'

// <NavLink classname = 'djfsioadf' to='/signup'>To: Login<NavLink/>

//source code, disclaimer