import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

//Page Components
import Home from './pages/Home/Home';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { Auth } from './pages/Auth/Auth';
import SingleProduct from './pages/SingleProduct/SingleProduct';

//Components
import { TopNav } from './components/TopNav/TopNav';

import { ProductData } from './interfaces';
import './App.css';

function App() {
  const [user, setUser] = useState(false);
  const [products, setProducts] = useState<ProductData[]>([]);

  console.log('Products: ', products);

  useEffect(() => {
    axios
      .get<ProductData[]>('http://localhost:5000/products')
      .then((response: AxiosResponse) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <div className="App">
      <TopNav user={user} />
      <Routes>
        <Route element={<Home productData={products} />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Auth title="Login" />} path="/login" />
        <Route element={<Auth title="Register" />} path="/register" />
        <Route
          element={<SingleProduct productData={products} />}
          path="/products/:productId"
        />
      </Routes>
    </div>
  );
}

export default App;
