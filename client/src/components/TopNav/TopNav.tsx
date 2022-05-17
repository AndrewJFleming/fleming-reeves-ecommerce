import React, { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Container, Box } from "@mui/material";
import { styled } from "@mui/system";
import NavItem from "./NavItem/NavItem";
import CartNavItemInner from "./CartNavItemInner/CartNavItemInner";
import UserAvatar from "./UserAvatar/UserAvatar";

import { useStyles } from "./TopNav.styles";

interface Props {
  username: string;
}

const StyledNav = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    "&:first-of-type": {
      width: "100%",
    },
  },
}));

export const TopNav: FC<Props> = ({ username }) => {
  const classes = useStyles();
  const [cartCount, setCartCount] = useState<number>(0);
  const cart = useSelector((state: any) => state.cart);

  //Get cart count, factoring quantities of individual cart items.
  useEffect(() => {
    const count = cart.cartItems.reduce(
      (accumulator: any, cartItem: { quantity: number }) => {
        return accumulator + cartItem.quantity;
      },
      0
    );
    setCartCount(count);
  }, [cart]);

  return (
    <Box component="header" sx={{ backgroundColor: "error.main" }}>
      <Container className={classes.headerContainer}>
        <StyledNav id="left-nav">
          <NavItem
            navItemInner="Fleming Reeves Ecommerce"
            path="/"
            linkClasses={`${classes.headerLogo} ${classes.navItem}`}
          />
        </StyledNav>
        <StyledNav id="center-left-nav">
          <NavItem
            navItemInner="About"
            path="/about"
            linkClasses={classes.navItem}
          />
          <NavItem
            navItemInner="Contact"
            path="/contact"
            linkClasses={classes.navItem}
          />
        </StyledNav>
        <StyledNav id="center-right-nav">
          {username && <UserAvatar username={username} />}
          <NavItem
            navItemInner={<CartNavItemInner cartCount={cartCount} />}
            path="/cart"
            linkClasses={classes.navItem}
          />
        </StyledNav>
        <StyledNav id="right-nav">
          {username ? (
            <NavItem
              navItemInner="Logout"
              path=""
              linkClasses={`${classes.authLink} ${classes.navItem}`}
            />
          ) : (
            <React.Fragment>
              <NavItem
                navItemInner="Login"
                path="/login"
                linkClasses={`${classes.authLink} ${classes.navItem}`}
              />
              <NavItem
                navItemInner="Register"
                path="/register"
                linkClasses={`${classes.authLink} ${classes.navItem}`}
              />
            </React.Fragment>
          )}
        </StyledNav>
      </Container>
    </Box>
  );
};
