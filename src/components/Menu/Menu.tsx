import React, { useState } from "react";
import "./menuStyles.css";
import logo from "../../images/logo.png";
import { Graph } from "../Graph";

export function Menu() {
  const [graphs, setGraphs] = useState<string[]>([]);

  const handleGraphSelection = (index: number) => {
    console.log(index);
  };
  return (
    <div>
      <div className="side-nav">
        <a href="/" className="logo">
          <img src={logo} alt="logo" className="logo-img" />
        </a>
        <ul className="nav-links">
          <li>
            <button>Home logo</button>
          </li>
          {graphs.map((graph, index) => (
            <li key={index}>
              <button onClick={() => handleGraphSelection(index)}>
                Graph {index}
              </button>
            </li>
          ))}
          <li className="add-graph">
            <button
              className="add-graph-btn"
              onClick={() =>
                setGraphs((prevGraphs) => ["New Graph", ...prevGraphs])
              }
            >
              +
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
