import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm'

export default function Header(){
    return(
        <header>
            <nav>
                <h1 className='header-item'>Anywhere Fitness</h1>
                <NavLink  className='header-item underline'  to='/login'>
                    Login
                </NavLink>
                <NavLink className='header-item underline' to='/signup'>
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