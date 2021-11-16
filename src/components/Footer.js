import React from 'react'
import Header from './Header';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm'

// NOTES:
// -This is mostly designed the same as the Header, and **uses the same styles as the header**.
// -Each item in the footer has the class name 'nav-item'

export default function Footer(){
    return(
        <footer className='footer'>
            {/* all the items in the footer will have the classname 'nav-item' */}
            <nav className='footer-nav'>
                <a className='footer-nav-item' href= 'https://github.com'>Github</a>
                <a className = 'footer-nav-item' href=''>Supplements</a>
                <h6 className='footer-nav-item copyright'>&copy;Lorem Ipsum Industries </h6>
            </nav>
        </footer>
    )
}