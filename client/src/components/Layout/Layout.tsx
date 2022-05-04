import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ClassNames } from '@emotion/react';
import StarRateIcon from '@mui/icons-material/StarRate';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Person } from '@mui/icons-material';
import { flexbox } from '@mui/system';
import { Container, CssBaseline, Grid, Paper } from '@mui/material';
import { TopNav } from '../TopNav/TopNav';
import { Link } from 'react-router-dom';

type Props = {
  children?: React.ReactNode;
  user: boolean;
};

const drawerWidth = 240;

const useStyles = makeStyles((theme: any) => {
  return {
    drawer: {
      backgroundColor: '#F3F6E5!important'
    },
    navListItem: {
      backgroundColor: '#C44343!important'
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

const Layout = ({ children, user }: Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container>
        <CssBaseline />
        <Grid item xs={3}>
          <Drawer
            sx={{
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: 'inherit',
                boxSizing: 'border-box'
              }
            }}
            classes={{
              paper: classes.drawer
            }}
            variant="permanent"
            anchor="left"
          >
            <Toolbar>
              <Box className={classes.userIconContainer}>
                <PersonIcon />
              </Box>
              <Typography variant="h5">John Doe</Typography>
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
            <Paper className={classes.drawer} />
          </Drawer>
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
