import React, { useState } from "react";
import "./menuStyles.css";
import logo from "../../images/logo.png";
import home from "../../images/home-icon.png";
import { Modal } from "../../components";

export function Menu() {
  const [graphs, setGraphs] = useState<string[]>([]);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [newGraphName, setNewGraphName] = useState<string>("");

  const handleGraphSelection = (index: number) => {
    console.log(index);
  };

  const handleModal = () => {
    setModalActive(true);
    console.log(modalActive);
  };

  const closeModal = () => {
    setModalActive(false);
    console.log(modalActive);
  };

  const handleGraphAdd = () => {
    if (newGraphName.trim() !== "") {
      // Only add a new graph if the input is not empty
      setGraphs((prevGraphs) => [newGraphName, ...prevGraphs]);
      setNewGraphName(""); // Clear the input field
      closeModal(); // Close the modal after adding a new graph
    }
  };

  return (
    <div>
      <div className="side-nav">
        <a href="/" className="logo">
          <img src={logo} alt="logo" className="logo-img" />
        </a>
        <ul className="nav-links">
          <li className="home-icon">
            <a href="/">
              <img src={home} alt="home" />
            </a>
          </li>
          {graphs.map((graph, index) => (
            <li key={index}>
              <button
                className="graph"
                onClick={() => handleGraphSelection(index)}
              >
                {graph}
              </button>
            </li>
          ))}
          <li className="add-graph" onClick={handleModal}></li>
        </ul>
      </div>
      {modalActive && (
        <Modal
          onClose={closeModal}
          onInputChange={(value) => setNewGraphName(value)}
          onAddGraph={handleGraphAdd}
        />
      )}
    </div>
  );
}
