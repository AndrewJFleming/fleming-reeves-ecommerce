import React from 'react';
import './Modal.css';

type ModalProps = {
  imageUrl: string;
  title: string;
};

const Modal = (props: ModalProps) => {
  return (
    <div className="modal-container">
      <img
        className="modal-image"
        src={props.imageUrl}
        alt={props.title}
      />
    </div>
  );
};

export default Modal;
