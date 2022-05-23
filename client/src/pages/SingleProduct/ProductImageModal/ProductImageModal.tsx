import { FC } from "react";

import { Modal } from "@mui/material";

import { styled } from "@mui/system";

interface Props {
  imageUrl: string | undefined;
  title: string | undefined;
  handleClose: any;
  isOpen: boolean;
}

const StyledModalImg = styled("img")(({ theme }) => ({}));

export const ProductImageModal: FC<Props> = ({
  imageUrl,
  title,
  handleClose,
  isOpen,
}) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledModalImg
        sx={{
          maxWidth: "95%",
          maxHeight: "95%",
          margin: "0 auto",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        src={imageUrl}
        alt={title}
      />
    </Modal>
  );
};

export default ProductImageModal;
