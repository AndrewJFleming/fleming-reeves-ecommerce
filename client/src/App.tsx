import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { updateFavorites } from "./redux/features/users";
import { addToCart, removeFromCart } from "./redux/features/cart";
import { getProducts } from "./redux/features/products";
import {
  UserReducerState,
  ProductData,
  CartState,
  CartItemState,
} from "./interfaces";

//Page Components
import Home from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Auth } from "./pages/Auth/Auth";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

//Components
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

interface RootState {
  products: {
    allProducts: ProductData[];
  };
  user: UserReducerState;
  cart: CartState;
}

function App() {
  const currentUser = useSelector(
    (state: RootState) => state.user.authData.user
  );
  const cart = useSelector((state: RootState) => state.cart);
  const products = useSelector(
    (state: RootState) => state.products.allProducts
  );
  const [favoriteProducts, setFavoriteProducts] = useState<ProductData[]>([]);
  const [favoritesIds, setFavoritesIds] = useState<string[]>([]);
  const [cartItemIds, setCartItemIds] = useState<string[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Get all products for use in Product cards and SingleProduct page.
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  //Create array just containing favorite product ids.
  useEffect(() => {
    const idsArray: string[] = [];
    favoriteProducts.forEach((favoriteProduct) =>
      idsArray.push(favoriteProduct._id)
    );
    setFavoritesIds(idsArray);
  }, [favoriteProducts]);

  //Create array just containing cart item product ids.
  useEffect(() => {
    const idsArray: string[] = [];
    cart.cartItems.forEach((cartItem: CartItemState) =>
      idsArray.push(cartItem.pId)
    );
    setCartItemIds(idsArray);
  }, [cart.cartItems]);

  //Check currentUser favorites array for product id matches in products array objs.
  useEffect(() => {
    const findFavoriteProducts = (
      currentUserFavorites: string[],
      allProducts: ProductData[]
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

  const handleFavorite = (id: string, isFavorite: boolean) => {
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

  const handleAddToCart = (productData: CartItemState) => {
    if (
      !cart.cartItems.find(
        (cartItem: CartItemState) => cartItem.pId === productData.pId
      )
    ) {
      dispatch(
        addToCart({
          pId: productData.pId,
          title: productData.title,
          thumbnail: productData.thumbnail,
          price: productData.price,
          quantity: productData.quantity,
        })
      );
    } else {
      //Remove cart item from cartItems array.
      dispatch(
        removeFromCart(
          cart?.cartItems.filter(
            (cartItem: CartItemState) => cartItem.pId !== productData.pId
          )
        )
      );
    }
  };

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Layout username={currentUser?.username}>
        <Routes>
          <Route
            element={
              <Home
                productData={products}
                favoritesIds={favoritesIds}
                cartItemIds={cartItemIds}
                handleFavorite={handleFavorite}
                handleAddToCart={handleAddToCart}
              />
            }
            path="/"
          />
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route
            element={
              <Auth title="Login" altAuthPage="Register" altPath="/register" />
            }
            path="/login"
          />
          <Route
            element={
              <Auth title="Register" altAuthPage="Login" altPath="/login" />
            }
            path="/register"
          />
          <Route
            element={
              <SingleProduct
                productData={products}
                favoritesIds={favoritesIds}
                cartItemIds={cartItemIds}
                userId={currentUser?._id}
                handleFavorite={handleFavorite}
                handleAddToCart={handleAddToCart}
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
          <Route
            element={
              <Cart cartItems={cart.cartItems} userId={currentUser?._id} />
            }
            path="/cart"
          />
          <Route
            element={<Profile userId={currentUser?._id} />}
            path="/profile"
          />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
