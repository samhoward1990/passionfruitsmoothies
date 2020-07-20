import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import NavbarMenu from './components/navbar/navbar';
function App() {
  return (
    <Router>
      <div className="App">
        <NavbarMenu />
      </div>
    </Router>
  );
}

export default App;
