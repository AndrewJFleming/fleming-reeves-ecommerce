import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CssBaseline,
  Typography,
  Toolbar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import StarRateIcon from "@mui/icons-material/StarRate";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { TopNav } from "../TopNav/TopNav";
import BackButton from "../BackButton/BackButton";
import { TokenExpiredPopup } from "../TokenExpiredPopup/TokenExpiredPopup";

type Props = {
  children?: React.ReactNode;
  username: string;
};

const useStyles = makeStyles((theme: any) => {
  return {
    drawer: {
      height: "100%",
      width: 240,
      flexShrink: 1,
      "& .MuiDrawer-paper": {
        boxSizing: "border-box",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    navLinkButton: {
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.25)!important",
      },
    },
    // root: {
    //   display: "flex",
    //   flexDirection: "column",
    // },
    usernameToolbar: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      height: 65,
      [theme.breakpoints.down("md")]: {
        height: 80,
      },
    },
    userIconContainer: {
      color: theme.palette.success.main,
      marginRight: 10,
      width: 35,
      height: 35,
      borderRadius: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    toolbarUsername: {
      color: theme.palette.success.main,
    },
    navBox: {},
    navLink: {
      textDecoration: "none",
      color: theme.palette.success.main,
      "&:hover": {
        textDecoration: "none",
        color: theme.palette.success.light,
      },
    },
    pageMain: {
      marginTop: "65px",
      [theme.breakpoints.down("md")]: {
        marginTop: "80px",
      },
    },
  };
});

const svgLink =
  "https://gist.githubusercontent.com/AndrewJFleming/3b1beae5c84b79adc425411572991a2e/raw/94e38925e6909316b248117450a151c09339c068/usernameToolbarBGSlender.svg";
const drawerWidth = 240;
// const transitionDuration = 1000;

const menuItems = [
  {
    //   Add username variable here
    text: "Profile",
    icon: <PersonIcon />,
    path: "/profile",
  },
  {
    text: "Favorites",
    icon: <StarRateIcon />,
    path: "/favorites",
  },
  {
    text: "Cart",
    icon: <ShoppingCartIcon />,
    path: "/cart",
  },
];

const Layout = ({ children, username }: Props) => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Toolbar className={classes.usernameToolbar}>
        <Box sx={{ display: "flex" }}>
          <Box className={classes.userIconContainer}>
            {/* <PersonIcon /> */}
            <img
              style={{ width: 40 }}
              src="https://gist.githubusercontent.com/AndrewJFleming/5c7179e2303872b7b71d18cf22ed1910/raw/e1588e345e15f3dc3de55eaa1edefc7a4eca2125/avatarZoomed.svg"
              alt="user placeholder avatar"
            />
          </Box>
          <Typography variant="h6" className={classes.toolbarUsername}>
            {/* turn this into a sign in button */}
            {username == null ? "Not signed in" : username}
          </Typography>
        </Box>
      </Toolbar>
      <List>
        {menuItems.map((menuItem, index) => (
          <Link className={classes.navLink} to={menuItem.path} key={index}>
            <ListItem button className={classes.navLinkButton}>
              <ListItemIcon sx={{ color: "success.main" }}>
                {menuItem.icon}
              </ListItemIcon>
              <ListItemText primary={menuItem.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopNav
        username={username}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="drawer-nav"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: "1px solid #ecf6d0",
              backgroundColor: "#110716",
              backgroundImage: `url(${svgLink})`,
              backgroundSize: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#110716",
              backgroundImage: `url(${svgLink})`,
              backgroundSize: "100%",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        className={classes.pageMain}
      >
        <TokenExpiredPopup />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
