import React from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      {/* Header */}
      <Header />
      <Home />
    </div>
  );
}

export default App;
