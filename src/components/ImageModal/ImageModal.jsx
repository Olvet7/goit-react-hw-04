import css from "./ImageModal.module.css";
import Modal from "react-modal";

// Modal Window in #root
Modal.setAppElement("#root");

// Modal settings
const customStyles = {
  content: {
    backgroundColor: "white",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ImageModal({ modalIsOpen, closeModal, modalData }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className={css.wrapper}>
        <img
          className={css.img}
          src={modalData.img}
          alt={modalData.alt_description}
          onClick={closeModal}
        />
        <p className={css.description}>{modalData.alt_description}</p>
      </div>
    </Modal>
  );
}
