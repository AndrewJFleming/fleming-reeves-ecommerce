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
        <Route
          element={<SingleProduct productData={products} />}
          path="/products/:productId"
        />
      </Routes>
    </div>
  );
}

export default App;
