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
  icon: any;
}

const contactlistItemStyles = makeStyles((theme: any) => {
  return {
    externalLinkIcon: {
      "& svg": {
        color: theme.palette.common.black,
      },
    },
    externalLinkText: {
      "& a": {
        color: theme.palette.primary.light,
        textDecoration: "none",
      },
      "& a:hover,& a:active": {
        color: theme.palette.primary.main,
        textDecoration: "underline",
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
  const classes = contactlistItemStyles();
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
