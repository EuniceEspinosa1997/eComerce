import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import { DataProvider } from './Context/Context';
import { Cart } from './components/Cart/Cart';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Routing from './components/Routing'
import ProductsList from './components/Products/ProductsList';
import Details from './components/Details/Details'
import Index from './components/Index/Index';
import 'boxicons';


function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Login/>
          <Header/>
          <Cart/>
          <Switch>
               <Route path = '/' exact component = {Index}/>
               <Route path = '/products' exact component = {ProductsList}/>
               <Route path = '/details' exact component = {Details}/>
            </Switch> 
            {/* <Routing/> */}
        </Router>
        <div className = 'content-wrap'>
          <Footer/>
        </div>
      </div>
    </DataProvider>
    
  );
}

export default App;
