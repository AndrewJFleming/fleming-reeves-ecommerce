import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios, { AxiosResponse } from "axios";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { updateFavorites } from "./redux/features/users";

//Page Components
import Home from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Auth } from "./pages/Auth/Auth";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

//Components
import { ProductData } from "./interfaces";
import Layout from "./components/Layout/Layout";
import Favorites from "./pages/Favorites/Favorites";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";

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
  const currentUser = useSelector((state: any) => state.user.authData?.user);

  const cartQuantity = useSelector((state:any) => state.user)
  // const cart = useSelector((state: any) => state.cartReducer);
  const [signedIn, setSignedIn] = useState<Boolean>(false);
  const [products, setProducts] = useState<ProductData[]>([]);
  const [favoriteProducts, setFavoriteProducts] = useState<ProductData[]>([]);
  const [favoritesIds, setFavoritesIds] = useState<string[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    console.log("cartQuantity: ", cartQuantity)
  },[cartQuantity])

  useEffect(() => {
    axios
      .get<ProductData[]>("http://localhost:5000/products")
      .then((response: AxiosResponse) => {
        setProducts(response?.data);
      });
  }, []);

  useEffect(() => {
    let _signedIn: Boolean = currentUser == undefined;
    setTimeout(() => {
      setSignedIn(_signedIn);
    }, 1000)
     console.log("signedIn: ", signedIn);
     console.log("currentUser: ", currentUser);
     
  }, [currentUser])

  useEffect(() => {
    const idsArray: string[] = [];
    favoriteProducts.forEach((favoriteProduct) =>
      idsArray.push(favoriteProduct._id)
    );
    setFavoritesIds(idsArray);
  }, [favoriteProducts]);

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
    setFavoriteProducts(findFavoriteProducts(currentUser?.favorites, products));
  }, [products, currentUser]);

  const handleFavorite = (id: any, isFavorite: boolean) => {
    if (!isFavorite) {
      const updatedFavoritesIds: string[] = favoritesIds;
      updatedFavoritesIds.push(id);
      //Add product id to favorites array.
      dispatch(
        updateFavorites({
          userId: currentUser?._id,
          updatedFavoritesIds,
          navigate,
        })
      );
    } else {
      const updatedFavoritesIds: string[] = favoritesIds.filter(
        (favId) => favId !== id
      );
      //Remove product id from favorites array.
      dispatch(
        updateFavorites({
          userId: currentUser?._id,
          updatedFavoritesIds,
          navigate,
        })
      );
    }
  };

  const greaterThan768 = useMediaQuery("(min-width:769px)");

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Layout
        username={currentUser?.username}
        greaterThan768={greaterThan768}
        // cart={cart}
      >
        <Routes>
          <Route
            element={
              <Home
                productData={products}
                handleFavorite={handleFavorite}
                favoritesIds={favoritesIds}
              />
            }
            path="/"
          />
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
            element={
              <SingleProduct
                productData={products}
                favoritesIds={favoritesIds}
                userId={currentUser?._id}
                handleFavorite={handleFavorite}
              />
            }
            path="/products/:productId"
          />
          <Route
            element={
              <Favorites
                favoritesIds={favoritesIds}
                favorites={favoriteProducts}
                userId={currentUser?._id}
              />
            }
            path="/favorites"
          />
          <Route element={<Cart productsInCart={products} />} path="/cart" />
          <Route 
          element={
          <Profile 
          userId={currentUser?._id}
          />} path="/profile" />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
