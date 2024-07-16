import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Users from './Users';
import UserDetails from './UserDetails';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Users />} />
        <Route path="/user/:userId" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
