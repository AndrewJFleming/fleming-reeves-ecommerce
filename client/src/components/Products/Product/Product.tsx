import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { makeStyles } from "@mui/styles";

import { CartItemState, ProductData, UserState } from "../../../interfaces";

interface Props {
  product: ProductData;
  handleFavorite: (id: string, isFavorite: boolean) => void;
  handleAddToCart: (productData: CartItemState) => void;
  currentUser: UserState;
  favoritesIds: string[];
  cartItemIds: string[];
}

const useStyles = makeStyles({
  productLink: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      textDecoration: "none",
    },
  },
});

const Product = ({
  product,
  handleFavorite,
  handleAddToCart,
  currentUser,
  favoritesIds,
  cartItemIds,
}: Props) => {
  const classes = useStyles();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isInCart, setIsInCart] = useState<boolean>(false);

  useEffect(() => {
    setIsFavorite(favoritesIds.includes(product._id));
  }, [product._id, favoritesIds]);
  useEffect(() => {
    setIsInCart(cartItemIds.includes(product._id));
  }, [product._id, cartItemIds]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={"/products/" + product._id} className={classes.productLink}>
        <CardMedia
          component="img"
          height="240"
          image={product.largeUrl}
          alt={"A preview of " + product.title}
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          color="success.dark"
          component="div"
        >
          ID: {product._id}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {product.desc.length <= 119
            ? product.desc
            : `${product.desc.substring(0, 120)}...`}
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            justifySelf: "center",
            alignSelf: "center",
            textAlign: "center",
            margin: "20px 0px 30px 0px",
          }}
        >
          {"Price:  $" + product.price}
        </Typography>
        {currentUser && (
          <CardActions>
            <React.Fragment>
              <Button
                size="small"
                onClick={() => handleFavorite(product._id, isFavorite)}
                sx={
                  isFavorite
                    ? { color: "rgba(34, 2, 66, 0.5)" }
                    : { color: "primary.main" }
                }
              >
                <StarRateIcon />
                Favorite
              </Button>
              <Button
                size="small"
                onClick={() =>
                  handleAddToCart({
                    pId: product._id,
                    title: product.title,
                    thumbnail: product.squareThumbUrl,
                    price: product.price,
                    quantity: 1,
                  })
                }
                sx={
                  isInCart
                    ? { color: "rgba(34, 2, 66, 0.5)" }
                    : { color: "primary.main" }
                }
              >
                <ShoppingCartIcon />{" "}
                {isInCart ? (
                  <span>Added to Cart</span>
                ) : (
                  <span>Add to Cart</span>
                )}
              </Button>
            </React.Fragment>
          </CardActions>
        )}
      </CardContent>
    </Card>
  );
};

export default Product;
