import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";

function App() {
  return (
      <>
          <Navbar/>
          <Cart/>
          <div className="mx-auto mb-4 container ">
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/store" element={<Store/>} />
              </Routes>
          </div>
      </>

  );
}

export default App;
