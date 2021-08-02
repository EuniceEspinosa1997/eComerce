import React from 'react';
import { useProducts } from '../../hooks/useProducts';            
import ProductoItem from './ProductoItem';

function ListProducts() {
    const { products } = useProducts();
    
    return (
     <>
      <h1 className = 'title'>Productos</h1>
        <div className = 'products'>
            {
                products.map(product =>(
                 <ProductoItem 
                    key = {product.id + "003"}
                    id = {product.id}
                    title = {product.title}
                    price = {product.price}
                    image = {product.image}
                    categoryId = {product.categoryId}
                    quantity = {product.quantity}
                 />
                ))
            }
        </div>
     </>
    )
}

export default ListProducts;
