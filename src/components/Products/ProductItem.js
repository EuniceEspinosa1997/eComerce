import React,{useContext} from 'react';
import {UserContext} from '../../Context/Context'

function ProductoItem({product}) {
    
    const value = useContext(UserContext);
    const addCart = value.addCart;
    const seeDetails = value.seeDetails;

    return (
     <div className = 'product'>
        <a href = '/'>
            <div className = 'product-img'>
                    <img src = {product.image} alt = {product.title}/>
            </div>
        </a>
        <div className = 'product-footer'>
            <h1>{product.title}</h1>
            <p>{product.categoryId}</p>
            <p className = 'price'>${product.price}</p>
        </div>
        <div className = 'button'>
            <button className = 'btn' onClick = {() => addCart(product.id)}>Add to cart</button>
            <div>
                <a href = '/details' className = 'btn' onClick = {() => { 
                    
                    return product.id;
                }}>Details</a>
            </div>
        </div>
     </div>    
    )
}

export default ProductoItem;
