import { FC } from "react";
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
  lineHeight: "18px",
  padding: "2px",
  textAlign: "center",
  borderRadius: "50%",
  marginRight: "12px",
}));

const UserAvatar: FC<Props> = ({ username }) => {
  return <StyledAvatar>{username.charAt(0).toUpperCase()}</StyledAvatar>;
};

export default UserAvatar;
