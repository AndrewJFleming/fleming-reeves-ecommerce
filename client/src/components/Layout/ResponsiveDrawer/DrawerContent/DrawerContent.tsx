import { Typography, Toolbar, Box, List } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StarRateIcon from "@mui/icons-material/StarRate";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DrawerMenuItems from "./DrawerMenuItems/DrawerMenuItems";

type Props = {
  username: any;
};

const useStyles = makeStyles((theme: any) => {
  return {
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
  };
});

const DrawerContent = ({ username }: Props) => {
  const classes = useStyles();

  return (
    <Box>
      <Toolbar className={classes.usernameToolbar}>
        <Box sx={{ display: "flex" }}>
          <Box className={classes.userIconContainer}>
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
      {username && (
        <List>
          <DrawerMenuItems
            path="/profile"
            icon={<PersonIcon />}
            text="Profile"
          />
          <DrawerMenuItems
            path="/favorites"
            icon={<StarRateIcon />}
            text="Favorites"
          />
          <DrawerMenuItems
            path="/cart"
            icon={<ShoppingCartIcon />}
            text="Cart"
          />
        </List>
      )}
    </Box>
  );
};

export default DrawerContent;
