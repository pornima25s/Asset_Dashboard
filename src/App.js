import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Setting from "./pages/Setting";
import AddAsset from './pages/AddAsset';
import EditAsset from './pages/EditAsset';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add-asset" exact element={<AddAsset />} />
          <Route path="/edit-asset/:id" exact element={<EditAsset />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/setting" exact element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
