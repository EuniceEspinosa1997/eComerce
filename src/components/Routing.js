import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListProducts from './Products/ListProducts';
import Details from './Details/details'
import Index from './Index/Index';

function Routing() {
    return (
        <section>
           <Switch>
               <Route path = '/' exact component = {Index}/>
               <Route path = '/products' exact component = {ListProducts}/>
               <Route path = '/details' exact component = {Details}/>
            </Switch> 
        </section>
    )
}

export default Routing;
