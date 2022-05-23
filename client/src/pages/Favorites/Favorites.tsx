import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateFavorites } from "../../redux/features/users";
import { makeStyles } from "@mui/styles";
import { ProductData } from "../../interfaces";
import BackButton from "../../components/BackButton/BackButton";

import {
  Container,
  CardContent,
  CardMedia,
  Card,
  Box,
  IconButton,
  List,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PageTitle from "../../components/PageTitle/PageTitle";
import NoItemsNotice from "../../components/NoItemsNotice/NoItemsNotice";

type Props = {
  favoritesIds: string[];
  favorites?: ProductData[];
  userId: string;
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

const Favorites = ({ favorites, userId, favoritesIds }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id: string) => {
    const updatedFavoritesIds: string[] = favoritesIds.filter(
      (favId) => favId !== id
    );
    dispatch(updateFavorites({ userId, updatedFavoritesIds, navigate }));
  };

  const classes = useStyles();

  let allFavorites: any = favorites?.map((favorite) => {
    return (
      <Card key={favorite._id} sx={{ display: "flex", marginBottom: 2 }}>
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
  });

  return (
    <Container>
      <BackButton />
      <PageTitle title="Favorites" />
      {allFavorites?.length ? (
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {allFavorites}
        </List>
      ) : (
        <NoItemsNotice notice="No Favorites Added" />
      )}
      {allFavorites?.length > 2 && <BackButton />}
    </Container>
  );
};

export default Favorites;
