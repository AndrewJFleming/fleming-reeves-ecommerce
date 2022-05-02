import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { createTheme, ThemeProvider } from '@mui/material';

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

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#20002d',
      light: '#706378',
      dark: '#16001c'
    },
    secondary: {
      main: '#be6e85',
      light: '#d0abb9',
      dark: '#7d3d4a'
    },
    error: {
      main: '#c44343',
      light: '#d09398',
      dark: '#86271e'
    },
    warning: {
      main: '#ed943f',
      light: '#e7b594',
      dark: '#a46616'
    },
    success: {
      main: '#f8ebb3',
      light: '#f6edd5',
      dark: '#a19b69'
    }
  },
  typography: {
    fontFamily: 'Bree Serif',
    h1: {
      fontFamily: 'Bree Serif'
    },
    h2: {
      fontFamily: 'Bree Serif'
    },
    h3: {
      fontFamily: 'Bree Serif'
    },
    h4: {
      fontFamily: 'Bree Serif'
    },
    h5: {
      fontFamily: 'Bree Serif'
    },
    h6: {
      fontFamily: 'Bree Serif'
    },
    body1: {
      fontFamily: 'Open Sans'
    },
    body2: {
      fontFamily: 'Open Sans'
    },
    button: {
      fontFamily: 'Open Sans'
    }
  }
});

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
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <TopNav user={user} />
        <Routes>
          <Route element={<Home productData={products} />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Auth title="Login" />} path="/login" />
          <Route
            element={<Auth title="Register" />}
            path="/register"
          />
          <Route
            element={<SingleProduct productData={products} />}
            path="/products/:productId"
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
