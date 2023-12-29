import React from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";
import { CircleNode } from "../CircleNode/CircleNode";

const removeMark = { hideAttribution: true };
const nodeTypes = {
  circle: CircleNode,
};

interface GraphProps {
  label?: string;
}

export function Graph({ label = "holder" }: GraphProps) {
  const node = {
    id: "1",
    data: { label: label },
    type: "circle",
    position: { x: 250, y: 5 },
  };
  return (
    <div className="" style={{ height: "100vh", width: "100%" }}>
      <ReactFlow
        defaultNodes={[node]}
        fitView
        proOptions={removeMark}
        nodesDraggable
        nodeTypes={nodeTypes}
      >
        <Background color="#282829" />
        <Controls />
      </ReactFlow>
    </div>
  );
}
