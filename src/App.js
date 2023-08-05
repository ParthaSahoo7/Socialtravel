import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ItemDetail from './components/ItemDetail';
import './App.css';

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        {/* <Link to="/item/:id">Item</Link> */}
      </nav>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/item/:id" element={<ItemDetail/>} />
      </Routes>
    </Router>
  );
};

export default App;