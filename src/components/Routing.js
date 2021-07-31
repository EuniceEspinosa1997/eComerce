import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListProducts from './Products/ListProducts';
import Index from './Index/Index';

function Routing() {
    return (
        <section>
           <Switch>
               <Route path = '/' exact component = {Index}/>
               <Route path = '/products' exact component = {ListProducts}/>
            </Switch> 
        </section>
    )
}

export default Routing;
