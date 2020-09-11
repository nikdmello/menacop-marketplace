import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
    <div className='header'>
        <div className='header-options'>
            <Link className='link' to='/shop-all'>
                "SHOP"
            </Link>
            <Link className='link' to='/faq'>
                "FAQ"
            </Link>
            <Link className='link' to='/contact-us'>
                "CONTACT"
            </Link>
        </div>
        
        <div className='header-logo'>
        <Link className='header-logo-link' to='/'>
            <img src='https://i.ibb.co/gmyBhk4/Screen-Shot-2020-03-06-at-1-16-43-AM.png' height='60%' width='60%'></img>
        </Link>
        </div>

        <div className='header-options-right'>
            {
                currentUser ?
                <div className='link' onClick={() => auth.signOut()}>"SIGN OUT"</div>
                :
                <Link className='link' to='/sign-in'>
                "SIGN IN"
                </Link>
            }  
        </div>
        
    </div>
)

export default Header;