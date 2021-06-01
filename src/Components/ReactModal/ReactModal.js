import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.94)"
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "none",
    outline: "none",
    padding: "none",
    border: "none",
    background: "#313131",
    fontFamily: "Roboto"
  }
};

Modal.setAppElement("#root");

export default function ReactModal(props) {
  return (
    <Modal isOpen={props.isOpen} style={customStyles}>
      {props.children}
    </Modal>
  );
}
