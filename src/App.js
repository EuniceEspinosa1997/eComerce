import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login/login'
import Header from './components/Header/Header';
import { Cart } from './components/Cart/cart';
import Routing from './components/Routing';
import 'boxicons';


function App() {
  return (
    <div className="App">
      <Router>
        <Login/>
        <Header/>
        
        <Routing/>
      </Router>
    </div>
  );
}

export default App;
