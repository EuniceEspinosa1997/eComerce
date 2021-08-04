import React from 'react';
import { useProducts } from '../../Hooks/useProducts';            
import ProductItem from './ProductItem';

function ProductsList() {
    const { products } = useProducts();
    
    return (
     <>
      <h1 className = 'title'>Productos</h1>
        <div className = 'products'>
            {
                
                products.map(product =>(
                 <ProductItem 
                    product = {product}
                    key = {product.id + "003"}
                 />
                ))
                
            }
        </div>
     </>
    )
}

export default ProductsList;
