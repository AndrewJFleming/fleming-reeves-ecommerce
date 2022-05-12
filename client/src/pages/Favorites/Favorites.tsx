import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { ProductData } from "../../interfaces";
import { useNavigate } from "react-router-dom";
import { updateFavorites } from "../../redux/features/users";

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
      <ListItem
        alignItems="flex-start"
        sx={{
          width: "85%",
          border: "1px solid black",
          borderRadius: 7,
          margin: "15px 0px",
        }}
      >
        <img src={favorite.squareThumbUrl} alt="a preview of the product" />
        <ListItemText
          primary={favorite.title}
          primaryTypographyProps={{ fontSize: "24px", fontWeight: 600 }}
          sx={{
            alignSelf: "center",
            marginLeft: "3vw",
            fontSize: "24px",
          }}
        />
        <p>{favorite._id}</p>
        <IconButton onClick={() => handleRemove(favorite._id)}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    );
  });

  return (
    <Box>
      <Typography variant="h2" textAlign="center">
        Favorites
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {allFavorites}
      </List>
    </Box>
  );
};

export default Favorites;
