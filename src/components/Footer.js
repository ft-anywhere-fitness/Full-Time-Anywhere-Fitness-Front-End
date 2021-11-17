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
                <h4 class='muscle-arm'>💪</h4>
                <div className='footer-links'>
                    <a target="_blank" className='footer-nav-item' href= 'https://github.com'>Github</a>
                    <a target="_blank" className = 'footer-nav-item' href=''>Supplements</a>
                    <a target="_blank" className='footer-nav-item' href=''>Source Code</a>
                </div>
                <h6 className='footer-nav-item copyright'>&copy;Lorem Ipsum Industries </h6>
            </nav>
                    {/* The disclaimer is below the rest of the footer */}
                     <div className='disclaimer-container footer-nav-item'>
                    <p>Disclaimer: This is not a real website and we do not have real classes. </p>
                </div>
        </footer>
    )
}