import { useState, useEffect } from "react";
import { ProductsApi } from "../Api/ProductsApi";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const resp = await ProductsApi.get("http://localhost:3006/products");
      setProducts(resp.data);
    } catch (err) {
      console.log(err);
    }
  };
  return {
    products,
  };
};
