import React,{useContext} from 'react';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import {UserContext} from '../../Context/context'

function Header() {

    const value = useContext(UserContext);
    const [menu, setMenu] = value.menu;
    const [cart] = value.cart;
    console.log(cart)

    const toogleMenu = ()=>{
        setMenu(!menu);
    }
    
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
                <div className = 'cart-header' onClick = {toogleMenu}>
                    <box-icon name = 'cart'></box-icon>
                    <span className =  'total-items'>{cart.length}</span>
                </div>
            </header>
            
        </div>
    );
}

export default Header;
