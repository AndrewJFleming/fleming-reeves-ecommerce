import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
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
import Layout from "./components/Layout/Layout";
import Favorites from "./pages/Favorites/Favorites";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
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
  const currentUser = useSelector(
    (state: any) => state.userReducer.authData.result
  );
  const [products, setProducts] = useState<ProductData[]>([]);
  const [favorites, setFavorites] = useState<ProductData[]>([]);

  console.log("Products: ", products);
  console.log(currentUser);

  useEffect(() => {
    axios
      .get<ProductData[]>("http://localhost:5000/products")
      .then((response: AxiosResponse) => {
        setProducts(response?.data);
      });
  }, []);

  //Check currentUser favorites array for product id matches in products array objs.
  useEffect(() => {
    const findFavoriteProducts = (
      currentUserFavorites: any,
      allProducts: any
    ) => {
      var matches: ProductData[] = [];
      allProducts.forEach((product: ProductData) => {
        if (
          currentUserFavorites?.find(
            (favorite: string) => favorite === product._id
          )
        ) {
          //If ids match, product object is pushed to matches array.
          matches.push(product);
        }
      });
      return matches;
    };

    //Array of matches objs are set to favorites state.
    setFavorites(findFavoriteProducts(currentUser?.favorites, products));
  }, [products]);

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      
      <Layout username={currentUser?.username}>
        <Routes>
          <Route element={<Home productData={products} />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route
            element={<Auth title="Login" altPath="/register" />}
            path="/login"
          />
          <Route
            element={<Auth title="Register" altPath="/login" />}
            path="/register"
          />
          <Route
            element={<SingleProduct productData={products} />}
            path="/products/:productId"
          />
          <Route
            element={<Favorites favorites={products} />}
            path="/favorites"
          />
          <Route element={<Cart productsInCart={products} />} path="/cart" />
          <Route element={<Profile />} path="/profile" />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
