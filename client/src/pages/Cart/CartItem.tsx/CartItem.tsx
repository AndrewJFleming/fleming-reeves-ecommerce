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

import { makeStyles } from "@mui/styles";

type Props = {
  cartItem: any;
  cartItems: [];
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
    buttonSectionWrapper: {
      display: "flex",
      justifyContent: "space-between",
    },
    buttonWrapper: {
      display: "flex",
      alignItems: "center",
      pl: 1,
      pb: 1,
    },
  };
});

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

  const classes = useStyles();

  return (
    <Card sx={{ display: "flex", marginBottom: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={cartItem.thumbnail}
        alt="Cart item image thumbnail"
      />
      <Box className={classes.contentWrapper}>
        <CardContent sx={{ flex: "1 0 auto", pb: 0 }}>
          <Link to={"/products/" + cartItem.pId}>
            <Typography component="div" variant="h6">
              {cartItem.title}
            </Typography>
          </Link>
          <Typography
            className={classes.itemId}
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
        <Box className={classes.buttonSectionWrapper}>
          <Box className={classes.buttonWrapper}>
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
          <Box className={classes.buttonWrapper}>
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
