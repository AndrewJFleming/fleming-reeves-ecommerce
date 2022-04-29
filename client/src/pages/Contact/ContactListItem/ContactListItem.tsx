import { FC } from "react";
import {
  Link as MUILink,
  ListItemIcon,
  ListItem,
  ListItemText,
} from "@mui/material";

interface Props {
  externalLinkUrl: string;
  externalLinkDestination: string;
  name: string;
  icon: any;
}

const ContactListItem: FC<Props> = ({
  externalLinkUrl,
  externalLinkDestination,
  name,
  icon,
}) => {
  return (
    <ListItem button component={MUILink} href={externalLinkUrl}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText
        primary={`${name.split(" ")[0]}'s ${externalLinkDestination}`}
      />
    </ListItem>
  );
};

export default ContactListItem;
