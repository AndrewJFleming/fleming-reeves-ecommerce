import React, { useState } from "react";
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import SingleProduct from "./pages/SingleProduct/SingleProduct";



function App() {

  const [user, setUser] = useState(true);

  return (
    <div className="App">
     <Routes>
       <Route element={<Home/>} path="/"/>
       <Route element={<SingleProduct/>} path="/products/:productId"/>
     </Routes>
    </div>
  );
}

export default App;
