import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button } from "@mui/material";
import { ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";

type Props = {};

const BackButton = (props: Props) => {
  return (
    <Link to="/">
      <Button
        sx={{
          paddingLeft: 0,
          "&:hover": {
            color: "#C44343",
          },
        }}
      >
        <ArrowBackIosIcon />
        Back To Products
      </Button>
    </Link>
  );
};

export default BackButton;
