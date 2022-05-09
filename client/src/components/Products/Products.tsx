import Product from "./Product/Product";
import { ProductData } from "../../interfaces";
import Grid from "@mui/material/Grid";
import "./Products.css";

interface ProductsProps {
  productsArray: ProductData[];
  handleFavorite: any;
  favoritesIds: string[];
}

const Products = ({
  productsArray,
  handleFavorite,
  favoritesIds,
}: ProductsProps) => {
  let allProducts = productsArray.map((product) => {
    return (
      <Grid item>
        <Product
          key={product._id}
          _id={product._id}
          imageId={product._id}
          imageUrl={product.largeUrl}
          title={product.title}
          desc={product.desc}
          price={product.price}
          handleFavorite={handleFavorite}
          favoritesIds={favoritesIds}
        />
      </Grid>
    );
  });

  return (
    <Grid container spacing={3}>
      {allProducts}
    </Grid>
  );
};

export default Products;
