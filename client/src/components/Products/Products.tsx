import Product from "./Product/Product";
import { CartItemState, ProductData, UserReducerState } from "../../interfaces";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

interface Props {
  productsArray: ProductData[];
  handleFavorite: (id: string, isFavorite: boolean) => void;
  handleAddToCart: (productData: CartItemState) => void;
  favoritesIds: string[];
  cartItemIds: string[];
}

interface RootState {
  user: UserReducerState;
}

const Products = ({
  productsArray,
  handleFavorite,
  handleAddToCart,
  favoritesIds,
  cartItemIds,
}: Props) => {
  const currentUser = useSelector(
    (state: RootState) => state.user.authData.user
  );

  let allProducts = productsArray.map((product) => {
    return (
      <Grid item xs={12} sm={12} md={6} lg={3} key={product._id}>
        <Product
          product={product}
          handleFavorite={handleFavorite}
          handleAddToCart={handleAddToCart}
          currentUser={currentUser}
          favoritesIds={favoritesIds}
          cartItemIds={cartItemIds}
        />
      </Grid>
    );
  });

  return (
    <Grid
      container
      spacing={3}
      sx={{
        width: "100%",
        margin: "0px",
      }}
    >
      {allProducts}
    </Grid>
  );
};

export default Products;
