import Product from "./Product/Product";
import { ProductData } from "../../interfaces";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

interface ProductsProps {
  productsArray: ProductData[];
  handleFavorite: (id: any, isFavorite: boolean) => void;
  handleAddToCart: (productData: any, quantity: number) => void;
  favoritesIds: string[];
  cartItemIds: string[];
}

const Products = ({
  productsArray,
  handleFavorite,
  handleAddToCart,
  favoritesIds,
  cartItemIds,
}: ProductsProps) => {
  const currentUser = useSelector((state: any) => state.user.authData.user);
  const cart = useSelector((state: any) => state.cart);

  let allProducts = productsArray.map((product) => {
    return (
      <Grid item xs={12} sm={12} md={6} lg={3} key={product._id}>
        <Product
          key={product._id}
          _id={product._id}
          imageId={product._id}
          imageUrl={product.largeUrl}
          thumbnail={product.squareThumbUrl}
          title={product.title}
          desc={product.desc}
          price={product.price}
          handleFavorite={handleFavorite}
          handleAddToCart={handleAddToCart}
          currentUser={currentUser}
          cart={cart}
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
