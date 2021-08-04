import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./Context/Context";
import { Cart } from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./components/Routing";
import "boxicons";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Login />
          <Header />
          <Cart />
          <Routing />
        </Router>
        <div className="content-wrap">
          <Footer />
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
