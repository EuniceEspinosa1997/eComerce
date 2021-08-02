import React from 'react';
import Portada from '../../img/inicio.jpg';
import {Link} from 'react-router-dom';
import Logo from '../../img/logo.png';

function Index() {
    return (
        <div className = 'index'>
            <Link to = '/'>
                <h1 className = 'title'>Inicio</h1>
            </Link>
            <Link to = '/products'>
                <h1 className = 'title'>Productos</h1>
            </Link>
            <div className = 'img.details'>
             <img src = {Logo} alt = ''/>
            </div> 
        </div>
    )
}

export default Index;
