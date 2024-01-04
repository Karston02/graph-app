import React, { useState } from "react";
import "./modalStyles.css";
import { useParams } from "react-router-dom";

interface ModalProps {
  onClose: () => void;
  onInputChange: (value: string) => void;
  onAddGraph: () => void;
}

export function Modal({ onClose, onInputChange, onAddGraph }: ModalProps) {
  const [coinInput, setCoinInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCoinInput(value);
    onInputChange(value); // Notify the parent component of the input change
  };

  const handleAddGraph = (event: React.FormEvent) => {
    event.preventDefault();
    onAddGraph(); // Notify the parent component to add a new graph
  };

  let { graphTicker } = useParams<{ graphTicker: string }>();
  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={handleAddGraph}>
          <div className="modal-content">
            <label>Enter the cryptocurrency</label>
            <input
              className="coin-input"
              type="text"
              required
              placeholder="Ex: BTC"
              autoComplete="on"
              value={coinInput}
              onChange={handleInputChange}
            />
          </div>
          <button className="modal-content" onClick={() => {}}>
            enter
          </button>
        </form>
      </div>
    </div>
  );
}
