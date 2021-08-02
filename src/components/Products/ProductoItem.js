import React,{useContext} from 'react';
import { Link } from 'react-router-dom'
import {UserContext} from '../../Context/context'

function ProductoItem({
    id,
    title,
    price,
    image,
    categoryId,
    quantity

}) {
    
    const value = useContext(UserContext);
    const addCart = value.addCart;



    return (
     <div className = 'product'>
        <a href = '/'>
            <div className = 'product-img'>
                    <img src = {image} alt = {title}/>
            </div>
        </a>
        <div className = 'product-footer'>
            <h1>{title}</h1>
            <p>{categoryId}</p>
            <p className = 'price'>${price}</p>
        </div>
        <div className = 'button'>
            <button className = 'btn' onClick = {() => addCart(id)}>Add to cart</button>
            <div>
                <a href = '/' className = 'btn'>Details</a>
            </div>
        </div>
     </div>    
    )
}

export default ProductoItem;
