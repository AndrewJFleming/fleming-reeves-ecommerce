import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeQuantity } from "../../../redux/features/cart";
import { removeFromCart } from "../../../redux/features/cart";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { updateFavorites } from "../../../redux/features/users";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";

type Props = {
  favorite: any;
  userId: string;
  favoritesIds: any;
};

const useStyles = makeStyles((theme: any) => {
  return {
    contentWrapper: {
      display: "flex",
      width: "250px",
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        width: "150px",
      },
    },
    itemId: {
      display: "block",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    buttonWrapper: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      pl: 1,
      pb: 1,
    },
  };
});

const FavoriteItem = ({ favorite, userId, favoritesIds }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id: string) => {
    const updatedFavoritesIds: string[] = favoritesIds.filter(
      (favId: string) => favId !== id
    );
    dispatch(updateFavorites({ userId, updatedFavoritesIds, navigate }));
  };

  const classes = useStyles();

  return (
    <Card sx={{ display: "flex", marginBottom: 2 }}>
      <Link to={"/products/" + favorite._id}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={favorite.squareThumbUrl}
          alt="Favorite product image thumbnail"
        />
      </Link>
      <Box className={classes.contentWrapper}>
        <CardContent sx={{ flex: "1 0 auto", pb: 0 }}>
          <Link to={"/products/" + favorite._id}>
            <Typography component="div" variant="h6">
              {favorite.title}
            </Typography>
          </Link>
          <Typography
            className={classes.itemId}
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {favorite._id}
          </Typography>
        </CardContent>
        <Box className={classes.buttonWrapper}>
          <IconButton
            aria-label="Remove from favorites"
            onClick={() => handleRemove(favorite._id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default FavoriteItem;
