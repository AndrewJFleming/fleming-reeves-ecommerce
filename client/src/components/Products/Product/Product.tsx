import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Product.css";
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

interface ProductProps {
  _id: string;
  imageId: string;
  imageUrl: string;
  thumbnail: string;
  title: string;
  desc: string;
  price: number;
  handleFavorite: (id: any, isFavorite: boolean) => void;
  handleAddToCart: (productData: any, quantity: number) => void;
  currentUser: object;
  updateFavoritesError: { name: string; message: string; expiredAt: string };
  cart: any;
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
  _id,
  imageId,
  imageUrl,
  thumbnail,
  title,
  desc,
  price,
  handleFavorite,
  handleAddToCart,
  currentUser,
  updateFavoritesError,
  cart,
  favoritesIds,
  cartItemIds,
}: ProductProps) => {
  const classes = useStyles();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isInCart, setIsInCart] = useState<boolean>(false);

  useEffect(() => {
    setIsFavorite(favoritesIds.includes(_id));
  }, [_id, favoritesIds]);
  useEffect(() => {
    setIsInCart(cartItemIds.includes(_id));
  }, [_id, cartItemIds]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={"/products/" + imageId} className={classes.productLink}>
        <CardMedia
          component="img"
          height="240"
          image={imageUrl}
          alt={"A preview of " + title}
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          color="success.dark"
          component="div"
        >
          ID: {_id}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {desc.length <= 119 ? desc : `${desc.substring(0, 120)}...`}
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
          {"Price:  $" + price}
        </Typography>
        {currentUser && (
          <CardActions>
            {updateFavoritesError?.name === "TokenExpiredError" && (
              <p>{updateFavoritesError?.message}</p>
            )}
            <React.Fragment>
              <Button
                size="small"
                onClick={() => handleFavorite(_id, isFavorite)}
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
                  handleAddToCart(
                    {
                      pId: _id,
                      title: title,
                      thumbnail: thumbnail,
                      price: price,
                    },
                    1
                  )
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
