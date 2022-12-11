import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/navbar';
import Landing from './landing/landing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
