import React, { useState } from "react";
import "./menuStyles.css";
import logo from "../../images/logo.png";
import home from "../../images/home-icon.png";
import { Modal } from "../../components";
import { useNavigate, useParams } from "react-router-dom";

export function Menu() {
  const [graphs, setGraphs] = useState<string[]>([]);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [newGraphName, setNewGraphName] = useState<string>("");

  const handleGraphSelection = (graph: string) => {
    console.log(graph);
  };

  const handleModal = () => {
    setModalActive(!modalActive);
  };

  const handleGraphAdd = () => {
    if (newGraphName.trim() !== "") {
      // Only add a new graph if the input is not empty
      setGraphs((prevGraphs) => [newGraphName, ...prevGraphs]);
      setNewGraphName(""); // Clear the input field
      handleModal();
    }
  };

  let navigate = useNavigate();
  let { graphTicker } = useParams<{ graphTicker: string }>();
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
                onClick={() => navigate(`/graph/${graphTicker}`)}
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
          onClose={handleModal}
          onInputChange={(value) => setNewGraphName(value)}
          onAddGraph={handleGraphAdd}
        />
      )}
    </div>
  );
}
