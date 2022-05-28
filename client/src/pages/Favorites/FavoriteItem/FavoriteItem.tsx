import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateFavorites } from "../../../redux/features/users";
import { ProductData } from "../../../interfaces";

import {
  IconButton,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { makeStyles } from "@mui/styles";

type Props = {
  favorite: ProductData;
  userId: string;
  favoritesIds: string[];
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
