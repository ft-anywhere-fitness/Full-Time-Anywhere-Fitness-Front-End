import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm'

export default function Header(){
    return(
        <header>
            <nav>
                <h1 className='header-item'>Anywhere Fitness </h1>
<<<<<<< HEAD
=======
                <NavLink className='header-item underline' to='/'>
                   Home Page
                </NavLink>
>>>>>>> 1a7253e81d2081581670c439955627b7dc2d402f
                <NavLink  className='header-item underline'  to='/login'>
                    Login
                </NavLink>
                <NavLink className='header-item underline' to='/signup'>
                   Sign Up
                </NavLink>
<<<<<<< HEAD
            </nav>
       

            <Routes>
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/signup' element={<SignUpForm/>}/>
            </Routes>
=======
                <NavLink className='header-item underline' to='/classes'>
                   View Classes
                </NavLink>
            </nav>
       

>>>>>>> 1a7253e81d2081581670c439955627b7dc2d402f
        </header>

    )
}

// NavLink to = '/signup'

// <NavLink classname = 'djfsioadf' to='/signup'>To: Login<NavLink/>

//source code, disclaimer