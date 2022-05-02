<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import { TopNav } from './components/TopNav';
import axios, { AxiosResponse } from 'axios';
import './App.css';
import { ProductData } from './interfaces';

function App() {
  const [user, setUser] = useState(true);
=======
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

//Page Components
import Home from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Auth } from "./pages/Auth/Auth";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

//Components
import { TopNav } from "./components/TopNav";

import { ProductData } from "./interfaces";
import "./App.css";

function App() {
  const [user, setUser] = useState(false);
>>>>>>> master
  const [products, setProducts] = useState<ProductData[]>([]);

  console.log("Products: ", products);

  useEffect(() => {
    axios
<<<<<<< HEAD
      .get<ProductData[]>('http://localhost:5000/products')
=======
      .get<ProductData[]>("http://localhost:5000/products")
>>>>>>> master
      .then((response: AxiosResponse) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <div className="App">
      <TopNav user={user} />
      <Routes>
        <Route element={<Home productData={products} />} path="/" />
<<<<<<< HEAD
=======
        <Route element={<About />} path="/about"></Route>
        <Route element={<Contact />} path="/contact"></Route>
        <Route element={<Auth title="Login" />} path="/login"></Route>
        <Route element={<Auth title="Register" />} path="/register"></Route>
>>>>>>> master
        <Route
          element={<SingleProduct productData={products} />}
          path="/products/:productId"
        />
      </Routes>
    </div>
  );
}

export default App;
