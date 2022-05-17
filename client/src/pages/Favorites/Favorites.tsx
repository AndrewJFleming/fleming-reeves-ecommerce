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

type Props = {
  favoritesIds: string[];
  favorites?: ProductData[];
  userId: string;
};

const useStyles = makeStyles((theme: any) => {
  return {};
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

  let allFavorites = favorites?.map((favorite) => {
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
        <Box sx={{ display: "flex", width: 300, flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto", pb: 0 }}>
            <Link to={"/products/" + favorite._id}>
              <Typography component="div" variant="h6">
                {favorite.title}
              </Typography>
            </Link>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {favorite._id}
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              pl: 1,
              pb: 1,
            }}
          >
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
      <Typography variant="h2" textAlign="center">
        Favorites
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "35px 0px 0px",
        }}
      >
        {allFavorites}
      </List>
    </Container>
  );
};

export default Favorites;
