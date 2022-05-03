import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

//Page Components
import Home from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Auth } from "./pages/Auth/Auth";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

//Components
import { TopNav } from "./components/TopNav/TopNav";

import { ProductData } from "./interfaces";
// import "./App.css";

const customTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#f3f6e5",
          "& a": {
            color: "#220242",
            textDecoration: "none",
          },
          "& a:hover,& a:active": {
            color: "#18002a",
            textDecoration: "underline",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#220242",
      light: "#635776",
      dark: "#18002a",
    },
    secondary: {
      main: "#f9d0a3",
      light: "#f0e0dc",
      dark: "#a3885d",
    },
    error: {
      main: "#c44343",
      light: "#d09398",
      dark: "#86271e",
    },
    warning: {
      main: "#b38305",
      light: "#c3a570",
      dark: "#735d00",
    },
    success: {
      main: "#ecf6d0",
      light: "#f3f6e5",
      dark: "#929d7e",
    },
    background: {
      paper: "#fefff9",
    },
  },
  typography: {
    fontFamily: "Bree Serif",
    h1: {
      fontFamily: "Bree Serif",
    },
    h2: {
      fontFamily: "Bree Serif",
    },
    h3: {
      fontFamily: "Bree Serif",
    },
    h4: {
      fontFamily: "Bree Serif",
    },
    h5: {
      fontFamily: "Bree Serif",
    },
    h6: {
      fontFamily: "Bree Serif",
    },
    body1: {
      fontFamily: "Open Sans",
    },
    body2: {
      fontFamily: "Open Sans",
    },
    button: {
      fontFamily: "Open Sans",
    },
  },
});

function App() {
  const [user, setUser] = useState(false);
  const [products, setProducts] = useState<ProductData[]>([]);

  console.log("Products: ", products);

  useEffect(() => {
    axios
      .get<ProductData[]>("http://localhost:5000/products")
      .then((response: AxiosResponse) => {
        setProducts(response?.data);
      });
  }, [products]);

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default App;
