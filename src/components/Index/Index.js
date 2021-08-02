import React from 'react';
import Portada from '../../img/inicio.jpg';
import {Link} from 'react-router-dom';

function Index() {
    return (
        <div className = 'index'>
            <Link to = '/'>
                <h1 className = 'title'>Inicio</h1>
            </Link>
            <Link to = '/products'>
                <h1 className = 'title'>Productos</h1>
            </Link>
        </div>
    )
}

export default Index;
