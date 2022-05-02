import { FC } from "react";

import { ListItemIcon, ListItem, ListItemText } from "@mui/material";

import "./ContactListItem.css";

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
    <ListItem>
      <ListItemIcon className="external-link-icon">{icon}</ListItemIcon>
      <ListItemText
        className="external-link-text"
        primary={
          <a href={externalLinkUrl}>{`${
            name.split(" ")[0]
          }'s ${externalLinkDestination}`}</a>
        }
      />
    </ListItem>
  );
};

export default ContactListItem;
