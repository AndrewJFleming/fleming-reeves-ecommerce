import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import StarRateIcon from '@mui/icons-material/StarRate';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  Container,
  CssBaseline,
  Grid,
  Paper,
  useMediaQuery,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';
import { TopNav } from '../TopNav/TopNav';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  children?: React.ReactNode;
  username: string;
  greaterThan768: boolean;
};

const drawerWidth = 240;
const transitionDuration = 1000;

const useStyles = makeStyles((theme: any) => {
  return {
    drawer: {
      height: '100%',
      flexShrink: 1,
      '& .MuiDrawer-paper': {
        boxSizing: 'border-box'
      }
    },
    drawerPaper: {
      backgroundColor: '#C44343!important',
      width: 'inherit',
      height: 'inherit'
    },
    navListItem: {
      backgroundColor: '#F3F6E5!important'
    },
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    userIcon: {
      marginRight: 10
    },
    userIconContainer: {
      marginRight: 10,
      width: 45,
      height: 45,
      borderRadius: 50,
      border: '1px solid black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    navLink: {
      textDecoration: 'none',
      color: 'inherit',
      '&:hover': {
        textDecoration: 'none'
      }
    },
    navContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'flex-start',
      justifySelf: 'flex-start',
      width: '100vw',
      margin: '0',
      backgroundColor: '#C44343',
      top: '0',
      position: 'sticky',
      zIndex: '9000'
    },
    menuButton: {
      justifySelf: 'flex-start',
      alignSelf: 'flex-start',
      margin: '15px 0'
    }
  };
});

const menuItems = [
  {
    text: 'Favorites',
    icon: <StarRateIcon />,
    path: '/favorites'
  },
  {
    //   Add username variable here
    text: 'Profile',
    icon: <PersonIcon />,
    path: '/profile'
  },
  {
    text: 'Cart',
    icon: <ShoppingCartIcon />,
    path: '/cart'
  }
];

const Layout = ({ children, username, greaterThan768 }: Props) => {
  const classes = useStyles();

  const [open, setOpen] = useState(greaterThan768);

  useEffect(
    () => {
      setOpen(greaterThan768);
    },
    [greaterThan768]
  );

  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <CssBaseline />
      <Box className={classes.navContainer}>
        <TopNav username={username} />
      </Box>

      {/* TopNav and current homepage */}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%'
        }}
      >
        {/* Drawer begins here */}
        {open
          ? <Drawer
              className={classes.drawer}
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              anchor="left"
              sx={{
                width: greaterThan768 ? drawerWidth : '100%'
              }}
            >
              <Toolbar />
              <Toolbar
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ display: 'flex' }}>
                  <Box className={classes.userIconContainer}>
                    <PersonIcon />
                  </Box>
                  <Typography variant="h5">
                    {/* turn this into a sign in button */}
                    {username == null ? 'Not signed in' : username}
                  </Typography>
                </Box>
                {!greaterThan768 &&
                  <Button
                    onClick={() => handleMenuClick()}
                    sx={{
                      justifySelf: 'flex-end'
                    }}
                  >
                    <CloseIcon />
                  </Button>}
              </Toolbar>
              <Divider />
              <List className={classes.navListItem}>
                {menuItems.map((item, index) =>
                  <Link className={classes.navLink} to={item.path}>
                    <ListItem button key={item.text}>
                      <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  </Link>
                )}
              </List>
            </Drawer>
          : <Button
              onClick={() => handleMenuClick()}
              className={classes.menuButton}
              sx={{
                border: 'solid 2px #C44343',
                margin: '15px 0',
                position: 'absolute',
                left: '15px'
              }}
            >
              <MenuIcon />
            </Button>}

        {children}
      </Box>
    </Box>
  );
};

export default Layout;
