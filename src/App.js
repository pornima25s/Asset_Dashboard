import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Setting from './pages/Setting';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/setting" exact element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}
