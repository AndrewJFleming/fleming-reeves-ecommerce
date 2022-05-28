import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createCart, emptyCart } from "../../redux/features/cart";
import { CartItemState } from "../../interfaces";

import { Container, List, Typography, Button, Box } from "@mui/material";
import CartItem from "./CartItem.tsx/CartItem";
import PageTitle from "../../components/PageTitle/PageTitle";
import BackButton from "../../components/BackButton/BackButton";
import NoItemsNotice from "../../components/NoItemsNotice/NoItemsNotice";

type Props = {
  cartItems: CartItemState[];
  userId: string;
};

const Cart = ({ cartItems, userId }: Props) => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  const handleCheckout = () => {
    dispatch(createCart({ products: cartItems, userId: userId, total: total }));
  };

  useEffect(() => {
    //Get total price of cart, factoring quantities of individual cart items.
    const sum = cartItems.reduce(
      (accumulator, cartItem: { price: number; quantity: number }) => {
        return accumulator + cartItem.price * cartItem.quantity;
      },
      0
    );
    setTotal(sum);
  }, [cartItems]);

  return (
    <Container>
      <BackButton />
      <PageTitle title="Cart" />
      {cartItems.length > 0 ? (
        <React.Fragment>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "35px 0px 0px",
            }}
          >
            {cartItems?.map((cartItem: CartItemState) => {
              return (
                <CartItem
                  key={cartItem.pId}
                  cartItem={cartItem}
                  cartItems={cartItems}
                />
              );
            })}
            <Typography variant="h4">{"Total: $" + total}</Typography>
          </List>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              margin: "35px 0px",
            }}
          >
            <Button variant="outlined" onClick={handleEmptyCart}>
              Empty Cart
            </Button>
            <Button variant="contained" onClick={handleCheckout}>
              Checkout
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <NoItemsNotice notice="No Products in Cart" />
      )}
      {cartItems?.length > 2 && <BackButton />}
    </Container>
  );
};

export default Cart;
