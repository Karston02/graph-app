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
        <form action="">
          <div className="modal-content">
            <label>Enter the cryptocurrency</label>
            <input
              className="coin-input"
              type="text"
              required
              placeholder="Ex: BTC"
              autoComplete="on"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
