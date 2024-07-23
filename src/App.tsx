import React from 'react';
import './App.css';
import { items } from './data';
import Listing from './components/Listing';

const App: React.FC = () => {
  return (
      <div className="App">
        <h1>Etsy Listings</h1>
        <Listing items={items} />
      </div>
  );
}

export default App;