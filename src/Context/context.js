import React,{useState, createContext, useEffect} from 'react'
import { useProducts } from '../hooks/useProducts';


export const UserContext = createContext();


export const DataProvider = (props) =>{
    
    const { products } = useProducts();
    const[menu, setMenu] = useState(false);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const seeDetaiils = (id) => {
        console.log(id)

    }

    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item.id !==id;
        })
        if(check){
            const data = products.filter(product => {
                return product.id === id;
            })
            setCart([...cart, ...data])
            
        }else {
            alert('the product is alredy in cart')
            
        }
    }

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('localData'))
        if(localData){
            setCart(localData);
        }

    },[]);

    useEffect(() => {
        localStorage.setItem('localData', JSON.stringify(cart));
    },[cart]);

    useEffect(() => {
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0);
            setTotal(total);
        }
        getTotal();
    },[cart])

    const value = {

        product: [products],
        menu:[menu, setMenu],
        addCart: addCart,
        cart: [cart, setCart],
        total: [total, setTotal],
        seeDetaiils: seeDetaiils

    }
    
    return (
        <UserContext.Provider value = {value}>
            {props.children}

        </UserContext.Provider>
    )
}
