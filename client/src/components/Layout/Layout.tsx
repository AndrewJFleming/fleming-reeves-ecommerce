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
  CssBaseline,
  Grid,
  Paper,
  useMediaQuery
} from '@mui/material';
import { Link } from 'react-router-dom';
import { TopNav } from '../TopNav/TopNav';

type Props = {
  children?: React.ReactNode;
  username: string;
};

const drawerWidth = 240;

const useStyles = makeStyles((theme: any) => {
  return {
    drawer: {
      width: drawerWidth,
      flexShrink: 1,
      '& .MuiDrawer-paper': {
        boxSizing: 'border-box'
      }
    },
    drawerPaper: {
      backgroundColor: '#C44343!important',
      width: 'inherit'
    },
    navListItem: {
      backgroundColor: '#F3F6E5!important'
    },
    root: {
      display: 'flex'
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
      width: '100%',
      backgroundColor: '#C44343'
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
    text: 'John Doe',
    icon: <PersonIcon />,
    path: '/profile'
  },
  {
    text: 'Cart',
    icon: <ShoppingCartIcon />,
    path: '/cart'
  }
];

const drawer = <div />;

const Layout = ({ children, username }: Props) => {
  const classes = useStyles();
  const greaterThan375 = useMediaQuery('(min-width:376px)');

  const [open, setOpen] = useState(greaterThan375);

  useEffect(
    () => {
      setOpen(greaterThan375);
    },
    [greaterThan375]
  );

  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Box sx={{ width: drawerWidth }}>
        <Drawer
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar>
            <Box className={classes.userIconContainer}>
              <PersonIcon />
            </Box>
            <Typography variant="h5">
              {username}
            </Typography>
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
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        <Box className={classes.navContainer}>
          <TopNav username={username} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '35px'
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
