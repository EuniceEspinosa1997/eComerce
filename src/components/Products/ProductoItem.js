import React from 'react';

function ProductoItem({
    key,
    id,
    title,
    price,
    image,
    category,
    cantidad
}) {
    return (
     <div className = 'product'>
        <a href = '/'>
            <div className = 'product-img'>
                    <img src = {image.default} alt = {title}/>
            </div>
        </a>
        <div className = 'product-footer'>
            <h1>{title}</h1>
            <p>{category}</p>
            <p className = 'price'>{price}</p>
        </div>
        <div className = 'button'>
            <button className = 'btn'>Add to cart</button>
            <div>
                <a href = '/' className = 'btn'>Details</a>
            </div>
        </div>
     </div>    
    )
}

export default ProductoItem;
