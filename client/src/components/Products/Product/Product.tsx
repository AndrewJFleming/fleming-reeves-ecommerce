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
  title: string;
  desc: string;
  price: number;
  handleFavorite: any;
  favoritesIds: string[];
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
  title,
  desc,
  price,
  handleFavorite,
  favoritesIds,
}: ProductProps) => {
  const classes = useStyles();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  // const currentUser = useSelector((state: any) => state.user.authData.user);
  const updateFavoritesError = useSelector(
    (state: any) => state.user.error.message
  );

  useEffect(() => {
    const id: any = _id;
    setIsFavorite(favoritesIds.includes(id));
  }, [_id, favoritesIds]);

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
        <CardActions>
          {updateFavoritesError && <p>{updateFavoritesError}</p>}
          {/* {currentUser && ( */}
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
            <Button size="small">
              <ShoppingCartIcon /> Add to Cart
            </Button>
          </React.Fragment>
          {/* )} */}
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Product;
