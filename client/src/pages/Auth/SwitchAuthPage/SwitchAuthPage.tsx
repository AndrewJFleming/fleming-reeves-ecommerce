import { FC } from "react";
import { Link } from "react-router-dom";

import { Typography } from "@mui/material";

interface Props {
  prompt: string;
  title: string;
  altPath: string;
  handleClearForm: () => void;
}

export const SwitchAuthPage: FC<Props> = ({
  title,
  prompt,
  altPath,
  handleClearForm,
}) => {
  return (
    <Typography>
      {prompt}
      <Link to={altPath} onClick={handleClearForm}>
        {title}
      </Link>
    </Typography>
  );
};
