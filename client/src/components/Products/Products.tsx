import Product from './Product/Product';
import { ProductData } from '../../interfaces';
import Grid from '@mui/material/Grid';

interface ProductsProps {
  productsArray: ProductData[];
  handleFavorite: any;
  favoritesIds: string[];
}

const Products = ({
  productsArray,
  handleFavorite,
  favoritesIds
}: ProductsProps) => {
  let allProducts = productsArray.map(product => {
    return (
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={3}
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
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
    <Grid
      container
      spacing={3}
      sx={{
        width: '95%',
        margin: '0px 25px'
      }}
    >
      {allProducts}
    </Grid>
  );
};

export default Products;
