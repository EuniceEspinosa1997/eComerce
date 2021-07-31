import React, {useContext} from 'react';            
import { DataContext } from '../../context/Dataprovider';
import ProductoItem from './ProductoItem';

function ListProducts() {
    const value = useContext(DataContext);
    const [products] = value.products;
    console.log(products);


    return (
     <>
      <h1 className = 'title'>Productos</h1>
        <div className = 'products'>
            {
                products.map(product =>(
                 <ProductoItem 
                    key ={product.id}
                    id = {product.id}
                    title = {product.title}
                    price = {product.price}
                    image = {product.image}
                    category = {product.category}
                    cantidad = {product.cantidad}
                 />
                ))
            }
        </div>
     </>
    )
}

export default ListProducts;
