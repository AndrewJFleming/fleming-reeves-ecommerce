import React, { useEffect, useState } from "react";
import { Container, List, Typography, Button } from "@mui/material";
import BackButton from "../../components/BackButton/BackButton";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../redux/features/cart";
import { createCart } from "../../redux/features/cart";
import CartItem from "./CartItem.tsx/CartItem";

type Props = {
  // productsInCart: ProductData[];
  cartItems: [];
  userId: string;
  cartItemIds: string[];
};

const Cart = ({ cartItems, cartItemIds, userId }: Props) => {
  const dispatch = useDispatch();
  // const [cartState, setCartState] = useState([]);
  const [total, setTotal] = useState(0);

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  const handleCheckout = () => {
    dispatch(createCart({ products: cartItems, userId: userId, total: total }));
  };

  let currentCart = cartItems?.map((cartItem: any) => {
    return <CartItem cartItem={cartItem} cartItems={cartItems} />;
  });

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
      <Typography variant="h2" textAlign="center">
        Cart
      </Typography>
      {cartItems.length > 0 ? (
        <React.Fragment>
          <Button onClick={handleEmptyCart}>Empty Cart</Button>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid black",
              borderRadius: 7,
              margin: "35px 0px",
            }}
          >
            {currentCart}
            <Typography
              variant="h3"
              sx={{
                marginTop: 12,
              }}
            >
              {"Total: $" + total}
            </Typography>
          </List>
          <Button variant="contained" onClick={handleCheckout}>
            Checkout
          </Button>
        </React.Fragment>
      ) : (
        <Typography
          variant="h6"
          sx={{
            margin: "35px 0px",
          }}
        >
          No products in cart
        </Typography>
      )}
      <BackButton />
    </Container>
  );
};

export default Cart;
