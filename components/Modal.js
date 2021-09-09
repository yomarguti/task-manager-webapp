import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-screen bg-black bg-opacity-50">
      <div className="relative h-40 bg-white border border-gray-400 w-96 rounded-xl">
        <h1 className="pt-4 text-lg font-bold text-center">{title}</h1>
        <a
          href="#"
          onClick={handleCloseClick}
          className="absolute top-0 right-0 mr-3 font-semibold hover:cursor-pointer"
        >
          x
        </a>
        {children}
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    document.body.style.overflow = show ? "hidden" : "unset";
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
