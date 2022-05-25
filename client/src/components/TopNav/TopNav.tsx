import React, { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import NavItem from "./NavItem/NavItem";
import CartNavItemInner from "./CartNavItemInner/CartNavItemInner";
import UserAvatar from "./UserAvatar/UserAvatar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { useStyles } from "./TopNav.styles";

interface Props {
  username: string;
  handleDrawerToggle: any;
  drawerWidth: number;
}

const StyledNav = styled("nav")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    "&:first-of-type": {
      width: "100%",
    },
  },
}));

export const TopNav: FC<Props> = ({
  username,
  handleDrawerToggle,
  drawerWidth,
}) => {
  const classes = useStyles();
  const [cartCount, setCartCount] = useState<number>(0);
  const cart = useSelector((state: any) => state.cart);
  // const cart = useSelector((state: any) => state.cart);

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
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: "error.main",
      }}
    >
      <Toolbar className={classes.headerContainer}>
        <StyledNav id="left-nav">
          <NavItem
            navItemInner="Fleming Reeves Ecommerce"
            path="/"
            linkClasses={`${classes.headerLogo} ${classes.navItem}`}
          />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { sm: "none" }, color: "success.main" }}
          >
            <MenuIcon />
          </IconButton>
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
        {username && (
          <StyledNav id="center-right-nav">
            <React.Fragment>
              <UserAvatar username={username} />
              <NavItem
                navItemInner={<CartNavItemInner cartCount={cartCount} />}
                path="/cart"
                linkClasses={classes.navItem}
              />
            </React.Fragment>
          </StyledNav>
        )}
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
      </Toolbar>
    </AppBar>
  );
};
