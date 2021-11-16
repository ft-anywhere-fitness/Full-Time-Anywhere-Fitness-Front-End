import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm'

export default function Footer(){
    return(
        <footer>
               <nav>
                {/* <h1 className='nav-item'>Anywhere Fitness</h1> */}
                <NavLink  className='nav-item underline'  to='/login'>
                    Login
                </NavLink>
                <NavLink className='nav-item underline' to='/signup'>
                   Sign Up
                </NavLink>
                <a className='nav-item' href= 'https://github.com'>Github</a>
                <h6 className='nav-item copyright'>&copy;Lorem Ipsum Industries</h6>

            </nav>
       

            <Routes>
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/signup' element={<SignUpForm/>}/>
            </Routes>
        </footer>
    )
}