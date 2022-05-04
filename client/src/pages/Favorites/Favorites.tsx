import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { ProductData } from '../../interfaces';

type Props = {
  favorites?: ProductData[];
};

const useStyles = makeStyles((theme: any) => {
  return {};
});

const Favorites = ({ favorites }: Props) => {
 
    let allFavorites = favorites?.map(favorite => {
      return (
        <ListItem
          alignItems="flex-start"
          sx={{
            width: '85%',
            border: '1px solid black',
            borderRadius: 7,
            margin: '15px 0px'
          }}
        >
          <img
            src={favorite.squareThumbUrl}
            alt="a preview of the product"
          />
          <ListItemText 
          primary={favorite.title} 
          primaryTypographyProps={{fontSize: '24px', fontWeight: 600}}
          sx={{ 
              alignSelf: 'center',
              marginLeft: '3vw',
              fontSize: '24px'
              }} />
        </ListItem>
      );
    });
  

  return (
    <Box>
        <Typography
        variant='h2'
        textAlign="center"
        >
        Favorites
        </Typography>
      <List sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
      }}>
        {allFavorites}
      </List>
    </Box>
  );
};

export default Favorites;
