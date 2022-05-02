import React, { FC } from "react";

import { Container, Box } from "@mui/material";
import { styled } from "@mui/system";
import NavItem from "./NavItem/NavItem";
import CartNavItemInner from "./CartNavItemInner/CartNavItemInner";
import UserAvatar from "./UserAvatar/UserAvatar";

import { topNavStyles } from "./topNavStyles";

interface Props {
  user: boolean;
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

export const TopNav: FC<Props> = ({ user }) => {
  const classes = topNavStyles();

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
          {user && <UserAvatar username="Andrew" />}
          <NavItem
            navItemInner={<CartNavItemInner cartCount={0} />}
            path="/cart"
            linkClasses={classes.navItem}
          />
        </StyledNav>
        <StyledNav id="right-nav">
          {user ? (
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
