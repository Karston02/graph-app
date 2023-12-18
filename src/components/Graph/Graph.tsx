import React from "react";
import ReactFlow, { MiniMap, Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    position: { x: window.innerWidth / 2 - 100, y: window.innerHeight / 2 },
    data: { label: "1" },
  },
  {
    id: "2",
    position: {
      x: window.innerWidth / 2 - 100,
      y: window.innerHeight / 2 + 100,
    },
    data: { label: "2" },
  },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const removeMark = { hideAttribution: true };

interface GraphProps {
  page: number;
}

export function Graph({ page }: GraphProps) {
  return (
    <div className="" style={{ height: "100vh", width: "100%" }}>
      <ReactFlow
        minZoom={0.05}
        maxZoom={2.0}
        nodes={initialNodes}
        edges={initialEdges}
        proOptions={removeMark}
      >
        <Background size={2} color="#7c7c80" />
        <Controls />
      </ReactFlow>
    </div>
  );
}
