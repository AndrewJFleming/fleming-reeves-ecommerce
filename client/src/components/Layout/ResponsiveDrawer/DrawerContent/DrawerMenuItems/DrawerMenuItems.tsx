import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";

type Props = {
  path: string;
  icon: any;
  text: string;
};

const useStyles = makeStyles((theme: any) => {
  return {
    navLink: {
      textDecoration: "none",
      color: theme.palette.success.main,
      "&:hover": {
        textDecoration: "none",
        color: theme.palette.success.light,
      },
    },
    navLinkButton: {
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.25)!important",
      },
    },
  };
});

const DrawerMenuItems = ({ path, icon, text }: Props) => {
  const classes = useStyles();

  return (
    <Link className={classes.navLink} to={path}>
      <ListItem button className={classes.navLinkButton}>
        <ListItemIcon sx={{ color: "success.main" }}>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  );
};

export default DrawerMenuItems;
