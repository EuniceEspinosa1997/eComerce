import React from 'react';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <header>
                <Link to = '/'>
                    <div className = 'logo'>
                        <img src={logo} alt = 'logo e-comerce' width = '150px'/>
                    </div>
                </Link>
                <ul>
                    <li>
                        <Link to= '/'>Inicio</Link>
                    </li>
                    <li>
                        <Link to = '/products'>Productos</Link>
                    </li>
                </ul>
                <div className = 'cart'>
                    <box-icon name = 'cart'></box-icon>
                    <span className =  'total-items'>0</span>
                </div>
            </header>
            
        </div>
    );
}

export default Header;
