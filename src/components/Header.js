import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm'

export default function Header(){
    return(
        <header className= 'header'>
            <nav className='headernav'>
                <h1 className='nav-item'>Anywhere Fitness</h1>
                <NavLink  className='nav-item underline'  to='/login'>
                    Login
                </NavLink>
                <NavLink className='nav-item underline' to='/signup'>
                   Sign Up
                </NavLink>
            </nav>
       

            <Routes>
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/signup' element={<SignUpForm/>}/>
            </Routes>
        </header>

    )
}

// NavLink to = '/signup'

// <NavLink classname = 'djfsioadf' to='/signup'>To: Login<NavLink/>

//source code, disclaimer