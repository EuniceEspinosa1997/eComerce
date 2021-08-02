import React from 'react'
import logo from '../../img/logo.png'

export const Cart = () => {
    return (
     <div className = 'carts-show'>
        <div className = 'cart-show'>
            <div className = 'close-cart'>
                <box-icon name = 'x'></box-icon>
            </div>
            <h2>Your cart</h2>
            <div className = 'cart-content'>
             <div className = 'cart-item'>
                 <img src = {logo} alt = 'product-view'></img>
                <div>
                  <h3>title</h3>
                  <p className = 'price'>$30.9</p>
                </div>
                <div>
                  <box-icon className = 'up-arrow' type = 'solid'></box-icon>
                  <p className = 'quantity'>1</p>
                  <box-icon className = 'down-arrow' type = 'solid'></box-icon>
                </div>
                <div className = 'remove-item'>
                  <box-icon name = 'trash'></box-icon>
                </div>
             </div>
            </div>
            <div className = 'cart-footer'>
                <h3>Total: $1000</h3>
                <button className = 'btn'>Payment</button>
            </div>

        </div>  
     </div>
    )
}
