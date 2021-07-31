import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import { DataProvider } from './context/Dataprovider';
import Routing from './components/Routing';
import 'boxicons';

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
        <Header/>
        <Routing/>
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
