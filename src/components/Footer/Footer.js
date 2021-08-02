import React from 'react'
import '../../index.css';

function Footer() {
    return (
        <div className = 'footer'>
            <div className = 'info-footer'>
                <h3>eCommerce</h3>
                <h2>Eunice Espinosa</h2>
                <h2>Tel. 33 45 23 45</h2>
            </div>
            <div className = 'last-footer'>
                <div className = 'info-footer'>
                  <h5>Copyrigth 2021, All Rigth Reserved</h5>  
                  <p>&copy;{new Date().getFullYear()} eCommerce Inc | All rigths reserved | Termins of Service | Privacy</p>
                </div>
                

            </div>
            
        </div>
    )
}

export default Footer


