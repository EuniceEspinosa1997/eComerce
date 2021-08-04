import React,{useContext} from 'react';
import { UserContext} from '../../Context/Context'
import Logo from '../../img/logo.png'
import './Details.css';

function Details() {
    
    return (
      <div className = 'container'>
        <div className = 'details'>
        <div className = 'details-img'>
            <img src = {Logo} alt = ''/>
        </div>
          <div className = 'details-info'>             
          <h1 className = 'title'>Product details</h1>
          <h3>Description</h3>
          <p>Lorem Ipsum is simply dummy text of 
              the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard 
              dummy text ever since the 1500s
          </p>
          <h1 className = 'price'>Price $23.45</h1>
           </div>
        </div>
          
      </div>
    )
}

export default Details