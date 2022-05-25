import { Box, Drawer } from "@mui/material";
import DrawerContent from "./DrawerContent/DrawerContent";

type Props = {
  username: any;
  drawerWidth: any;
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
};

const SvgBGLink =
  "https://gist.githubusercontent.com/AndrewJFleming/3b1beae5c84b79adc425411572991a2e/raw/94e38925e6909316b248117450a151c09339c068/usernameToolbarBGSlender.svg";

const ResponsiveDrawer = ({
  username,
  drawerWidth,
  handleDrawerToggle,
  mobileOpen,
}: Props) => {
  return (
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
            backgroundImage: `url(${SvgBGLink})`,
            backgroundSize: "100%",
          },
        }}
      >
        <DrawerContent username={username} />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#110716",
            backgroundImage: `url(${SvgBGLink})`,
            backgroundSize: "100%",
          },
        }}
        open
      >
        <DrawerContent username={username} />
      </Drawer>
    </Box>
  );
};

export default ResponsiveDrawer;
