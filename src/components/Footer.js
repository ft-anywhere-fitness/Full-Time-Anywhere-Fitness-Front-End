import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom';
import Header from './Header';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm'

// NOTES:
// -This is mostly designed the same as the Header, and **uses the same styles as the header**.
// -Each item in the footer has the class name 'nav-item'

export default function Footer(){
    return(
        <footer>
            {/* all the items in the footer will have the classname 'nav-item' */}
               <nav className='footernav'>
                <NavLink  className='nav-item underline'  to='/login'>
                    Login
                </NavLink>
                <NavLink className='nav-item underline' to='/signup'>
                   Sign Up
                </NavLink>
                <a className='nav-item' href= 'https://github.com'>Github</a>
                <a className = 'nav-item' href=''>Supplements</a>
                <h6 className='nav-item copyright'>&copy;Lorem Ipsum Industries 2021</h6>


            </nav>
       

            <Routes>
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/signup' element={<SignUpForm/>}/>
            </Routes>
        </footer>
    )
}