import { FC } from "react";
import { Typography, Box } from "@mui/material";

interface Props {
  notice: string;
}

export const NoItemsNotice: FC<Props> = ({ notice }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography variant="h6" mb="1rem">
        {notice}
      </Typography>
    </Box>
  );
};

export default NoItemsNotice;
