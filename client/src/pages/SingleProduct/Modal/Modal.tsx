import "./Modal.css";

type ModalProps = {
  imageUrl: string | undefined;
  title: string | undefined;
};

const Modal = (props: ModalProps) => {
  return (
    <div className="modal-container">
      <img className="modal-image" src={props?.imageUrl} alt={props?.title} />
    </div>
  );
};

export default Modal;
