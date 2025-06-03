import { useEffect } from "react";
import close from "../assets/Icons/Icon_close.svg";

function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div onClick={onClose} role="dialog" className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="ep-overlayHeader">
          <h3>{title}</h3>
          <button onClick={onClose} className="close-btn">
            <span>
              <img src={close} alt="close" />
            </span>
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}

export default Modal;
