import React from 'react';

function ProductoItem({
    id,
    title,
    price,
    image,
    categoryId,
    quantity

}) {
    console.log(image)
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
            <button className = 'btn'>Add to cart</button>
            <div>
                <a href = '/' className = 'btn'>Details</a>
            </div>
        </div>
     </div>    
    )
}

export default ProductoItem;
