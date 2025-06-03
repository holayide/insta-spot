import { useEffect } from "react";

function ImagePreview({ open, onClose, card }) {
  const { title, image } = card;

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

  return (
    open && (
      <div className="modal-overlay">
        <div className="modal-inner" onClick={onClose}>
          <span className="close-btn close-btn__grid" onClick={onClose}>
            &times;
          </span>
          <div style={{ padding: "1.5rem 1.5rem 0 1.5rem" }}>
            <span style={{ fontWeight: "500" }}></span>
          </div>
          <div className="modal-img__container">
            <img src={image} alt="Preview" className="modal-img" />
          </div>
          <p className="modal-caption">{title}</p>
        </div>
      </div>
    )
  );
}

export default ImagePreview;
