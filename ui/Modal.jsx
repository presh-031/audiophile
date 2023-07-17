import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, isVisible, hideModal }) => {
  return isVisible ? createPortal(<>{children}</>, document.body) : null;
};

export default Modal;
