import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='header-logo' to='/'>
            <h1>"MENACOP MKTPLC"</h1>
        </Link>
        <div className='category-grid-items'>

        </div>
    </div>
)

export default Header;