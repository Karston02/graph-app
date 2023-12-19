import React from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

const nodeStyle = {
  color: "#0041d0",
  borderColor: "#0041d0",
};

export const nodes = [
  {
    type: "input",
    id: "1",
    data: { label: "BTC" },
    position: { x: 100, y: 0 },
    style: nodeStyle,
  },
  {
    id: "2",
    data: { label: "ETH" },
    position: { x: 0, y: 100 },
    style: nodeStyle,
  },
  {
    id: "3",
    data: { label: "LTC" },
    position: { x: 200, y: 100 },
    style: nodeStyle,
  },
  {
    id: "4",
    data: { label: "BONK" },
    position: { x: 100, y: 200 },
    style: nodeStyle,
  },
];

export const edges = [
  {
    id: "1->2",
    source: "1",
    target: "2",
    animated: true,
  },
  {
    id: "1->3",
    source: "1",
    target: "3",
    animated: true,
  },
  {
    id: "2->4",
    source: "2",
    target: "4",
    animated: true,
  },
  {
    id: "3->4",
    source: "3",
    target: "4",
    animated: true,
  },
];

const removeMark = { hideAttribution: true };

interface GraphProps {
  page: number;
}

export function Graph({ page }: GraphProps) {
  return (
    <div className="" style={{ height: "100vh", width: "100%" }}>
      <ReactFlow
        defaultNodes={nodes}
        defaultEdges={edges}
        fitView
        proOptions={removeMark}
        nodesDraggable
      >
        <Background color="#282829" />
        <Controls />
      </ReactFlow>
    </div>
  );
}
