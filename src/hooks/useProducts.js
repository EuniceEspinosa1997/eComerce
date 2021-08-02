import { useState, useEffect } from 'react';
import {productsApi} from '../api/productsApi'

export const useProducts = () => {

    const [ products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async() => {
        try{
           const resp = await productsApi.get('http://localhost:3006/products');
            console.log(resp.data)
            setProducts(resp.data); 
        }catch(err){
            console.log(err);
        }
        
    };
    return {
        products
    }

};