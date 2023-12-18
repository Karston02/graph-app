import React from "react";
import "./modalStyles.css";
interface ModalProps {
  onClose: () => void;
}
export function Modal({ onClose }: ModalProps) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <div className="modal-content">
          <h2>Enter the cryptocurrency</h2>
          <input className="coin-input" type="text" placeholder="Ex: BTC" />
        </div>
      </div>
    </div>
  );
}
