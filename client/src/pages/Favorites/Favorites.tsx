import { ProductData } from "../../interfaces";
import BackButton from "../../components/BackButton/BackButton";

import { Container, List } from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";
import FavoriteItem from "./FavoriteItem/FavoriteItem";
import NoItemsNotice from "../../components/NoItemsNotice/NoItemsNotice";

type Props = {
  favoritesIds: string[];
  favorites: ProductData[];
  userId: string;
};

const Favorites = ({ favorites, userId, favoritesIds }: Props) => {
  return (
    <Container>
      <BackButton />
      <PageTitle title="Favorites" />
      {favorites?.length ? (
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {favorites?.map((favorite) => {
            return (
              <FavoriteItem
                userId={userId}
                key={favorite._id}
                favorite={favorite}
                favoritesIds={favoritesIds}
              />
            );
          })}
        </List>
      ) : (
        <NoItemsNotice notice="No Favorites Added" />
      )}
      {favorites?.length > 2 && <BackButton />}
    </Container>
  );
};

export default Favorites;
