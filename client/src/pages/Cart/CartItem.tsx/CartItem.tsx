import React from "react";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../../../redux/features/cart";
import { removeFromCart } from "../../../redux/features/cart";
import { ListItem, ListItemText, ListItemButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  cartItem: any;
  cartItems: [];
};

const CartItem = ({ cartItem, cartItems }: Props) => {
  const dispatch = useDispatch();

  const qtyChangeHandler = (
    type: string,
    cartItemId: string,
    quantity: number
  ) => {
    const dispatchQtyChange = (change: any) => {
      dispatch(
        changeQuantity(
          cartItems.map((cartItem: any) =>
            cartItem.pId === cartItemId
              ? { ...cartItem, quantity: change }
              : cartItem
          )
        )
      );
    };

    if (type === "dec") {
      quantity > 1 && dispatchQtyChange(quantity - 1);
    } else {
      dispatchQtyChange(quantity + 1);
    }
  };

  const removeFromCartHandler = (cartItemId: string) => {
    dispatch(
      removeFromCart(
        cartItems.filter((cartItem: any) => cartItem.pId !== cartItemId)
      )
    );
  };

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
      <img src={cartItem.thumbnail} alt="a preview of the product" />
      <br />
      {cartItem.quantity}

      <ListItemText
        primary={cartItem.title}
        secondary={`Price: $${cartItem.price * cartItem.quantity}`}
        primaryTypographyProps={{
          fontSize: "24px",
          fontWeight: 600,
        }}
        sx={{
          alignSelf: "center",
          marginLeft: "3vw",
          fontSize: "24px",
        }}
      />
      <ListItemButton
        onClick={() => qtyChangeHandler("dec", cartItem.pId, cartItem.quantity)}
      >
        <ListItemText primary="-" />
      </ListItemButton>
      <ListItemButton
        onClick={() => qtyChangeHandler("inc", cartItem.pId, cartItem.quantity)}
      >
        <ListItemText primary="+" />
      </ListItemButton>
      <ListItemButton onClick={() => removeFromCartHandler(cartItem.pId)}>
        <DeleteIcon />
      </ListItemButton>
    </ListItem>
  );
};

export default CartItem;
