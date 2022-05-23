import { FC } from "react";

import { Typography, Box } from "@mui/material";

interface Props {
  title: string;
}

const PageTitle: FC<Props> = ({ title }) => {
  return (
    <Box>
      <Typography variant="h3" textAlign="center" mb="35px">
        {title}
      </Typography>
    </Box>
  );
};

export default PageTitle;
