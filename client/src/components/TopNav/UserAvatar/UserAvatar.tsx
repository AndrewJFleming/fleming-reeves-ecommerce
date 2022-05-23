import { FC } from "react";
import { Link } from "react-router-dom";

import { styled } from "@mui/system";

interface Props {
  username: string;
}

const StyledAvatar = styled("span")(({ theme }) => ({
  color: theme.palette.success.light,
  backgroundColor: theme.palette.primary.main,
  display: "inline-block",
  fontWeight: "600",
  width: "20px",
  height: "20px",
  padding: "2px",
  textAlign: "center",
  borderRadius: "50%",
  marginRight: "12px",
  "&:hover": {
    backgroundColor: theme.palette.common.black,
  },
}));

const UserAvatar: FC<Props> = ({ username }) => {
  return (
    <Link to="profile" style={{ lineHeight: "18px" }}>
      <StyledAvatar>{username.charAt(0).toUpperCase()}</StyledAvatar>
    </Link>
  );
};

export default UserAvatar;
