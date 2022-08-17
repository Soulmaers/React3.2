import React from 'react'
import './App.css';
import etsy from './components/etsy.json'
import Listing from './components/Listing'



function App() {
  return (
    <Listing items={etsy} />
  );
}

export default App;
