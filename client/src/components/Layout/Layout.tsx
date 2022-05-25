import React, { useState } from "react";
import { CssBaseline, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TopNav } from "../TopNav/TopNav";
import { TokenExpiredPopup } from "../TokenExpiredPopup/TokenExpiredPopup";
import ResponsiveDrawer from "./ResponsiveDrawer/ResponsiveDrawer";

type Props = {
  children?: React.ReactNode;
  username: string;
};

const useStyles = makeStyles((theme: any) => {
  return {
    pageMain: {
      marginTop: "65px",
      [theme.breakpoints.down("md")]: {
        marginTop: "80px",
      },
    },
  };
});

const drawerWidth = 240;
// const transitionDuration = 1000;

const Layout = ({ children, username }: Props) => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopNav
        username={username}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />
      <ResponsiveDrawer
        username={username}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
      />
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
