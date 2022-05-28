import { FC } from "react";

import { makeStyles } from "@mui/styles";
import {
  ListItemIcon,
  ListItem,
  ListItemText,
  Link as MUILink,
} from "@mui/material";

interface Props {
  externalLinkUrl: string;
  externalLinkDestination: string;
  name: string;
  icon: JSX.Element;
}

const useStyles = makeStyles((theme: any) => {
  return {
    externalLinkIcon: {
      "& svg": {
        color: theme.palette.primary.light,
      },
    },
    externalLinkText: {
      "& a": {
        color: theme.palette.primary.main,
        textDecoration: "none",
      },
    },
  };
});

const ContactListItem: FC<Props> = ({
  externalLinkUrl,
  externalLinkDestination,
  name,
  icon,
}) => {
  const classes = useStyles();
  return (
    <ListItem>
      <ListItemIcon className={classes.externalLinkIcon}>{icon}</ListItemIcon>
      <ListItemText
        className={classes.externalLinkText}
        primary={
          <MUILink href={externalLinkUrl}>
            {`${name.split(" ")[0]}'s ${externalLinkDestination}`}
          </MUILink>
        }
      />
    </ListItem>
  );
};

export default ContactListItem;
