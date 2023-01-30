import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Navbars from './components/navbar/navbar';
import Landing from './landing/landing';

function App() {
  return (
    <div className="App">
      <Navbars />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
