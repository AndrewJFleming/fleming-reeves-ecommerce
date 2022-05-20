import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../../../redux/features/cart";
import { removeFromCart } from "../../../redux/features/cart";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

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
    <Card sx={{ display: "flex", marginBottom: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={cartItem.thumbnail}
        alt="Cart item image thumbnail"
      />
      <Box sx={{ display: "flex", width: 300, flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto", pb: 0 }}>
          <Link to={"/products/" + cartItem.pId}>
            <Typography component="div" variant="h6">
              {cartItem.title}
            </Typography>
          </Link>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {cartItem.pId}
          </Typography>
          <Typography variant="h5" color="text.secondary" component="div">
            {`$${cartItem.price * cartItem.quantity}`}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 1,
              pb: 1,
            }}
          >
            <IconButton
              aria-label="Decrement"
              onClick={() =>
                qtyChangeHandler("dec", cartItem.pId, cartItem.quantity)
              }
            >
              <RemoveIcon />
            </IconButton>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {cartItem.quantity}
            </Typography>
            <IconButton
              aria-label="Increment"
              onClick={() =>
                qtyChangeHandler("inc", cartItem.pId, cartItem.quantity)
              }
            >
              <AddIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 1,
              pb: 1,
            }}
          >
            <IconButton
              aria-label="Remove from cart"
              onClick={() => removeFromCartHandler(cartItem.pId)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default CartItem;
