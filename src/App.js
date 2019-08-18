import React from 'react';
import './App.css';
import Header from './component/Header';
import Weather from './component/Weather';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;