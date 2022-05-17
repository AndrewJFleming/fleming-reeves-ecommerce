import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Container
} from '@mui/material';
import React from 'react';
import BackButton from '../../components/BackButton/BackButton';
import { ProductData } from '../../interfaces';
import { products } from './../../../data';

type Props = {
  productsInCart: ProductData[];
};


let total = 0;

const Cart = ({ productsInCart }: Props) => {
  total = 0;

  let currentCart = productsInCart?.map(product => {
    total += product.price;
    return (
      <ListItem
      sx={{
        width: '55%',
        display: 'flex',
        border: '1px solid black',
        borderRadius: 7,
        margin: '15px 0px',
        alignItems: "flex-start",
        justifySelf: 'flex-start'
        }}
      >
        <img
          src={product.squareThumbUrl}
          alt="a preview of the product"
        />
        <ListItemText
          primary={product.title}
          secondary={'Price:  $' + product.price}
          primaryTypographyProps={{
            fontSize: '24px',
            fontWeight: 600
          }}
          sx={{
            alignSelf: 'center',
            marginLeft: '3vw',
            fontSize: '24px'
          }}
        />
      </ListItem>
    );
  });

  return (
    <Container>
      <BackButton/>

      <Typography variant="h2" textAlign="center">
        Cart
      </Typography>
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid black',
          borderRadius: 7,
          margin: '35px 0px'
        }}
      >
        {currentCart}
        <Typography
        variant='h3'
        sx={{
            marginTop: 12
        }}
        >
            {"Total: $" + total}
        </Typography>
      </List>
      <BackButton />
    </Container>
  );
};

export default Cart;
