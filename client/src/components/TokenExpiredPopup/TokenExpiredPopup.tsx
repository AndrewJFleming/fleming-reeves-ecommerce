import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Box, Modal, Typography } from "@mui/material";

interface Props {}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const TokenExpiredPopup: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userError = useSelector((state: any) => state.user.error);

  useEffect(() => {
    //Listen for error value in user reducer
    if (userError.name === "TokenExpiredError") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [userError]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          User Token Expired
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          You've been logged out. Please{" "}
          <Link to="login" onClick={handleClose}>
            <span style={{ fontWeight: "bold" }}>login</span>
          </Link>{" "}
          again.
        </Typography>
      </Box>
    </Modal>
  );
};
