import React from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";
import { CircleNode } from "../CircleNode/CircleNode";

export const tempNodes = [
  {
    type: "circle",
    id: "1",
    data: { label: "BTC" },
    position: { x: 100, y: 0 },
  },
  {
    type: "circle",
    id: "2",
    data: { label: "ETH" },
    position: { x: 0, y: 100 },
  },
  {
    type: "circle",
    id: "3",
    data: { label: "LTC" },
    position: { x: 200, y: 100 },
  },
  {
    type: "circle",
    id: "4",
    data: { label: "SOL" },
    position: { x: 100, y: 125 },
  },
];

export const tempEdges = [
  {
    id: "1->2",
    source: "1",
    target: "2",
    animated: false,
  },
  {
    id: "1->3",
    source: "1",
    target: "3",
    animated: false,
  },
  {
    id: "1->4",
    source: "1",
    target: "4",
    animated: false,
  },
];

const removeMark = { hideAttribution: true };
const nodeTypes = {
  circle: CircleNode,
};
interface GraphProps {
  page: number;
  nodes: any;
  edges: any;
}

export function Graph({ page, nodes, edges }: GraphProps) {
  return (
    <div className="" style={{ height: "100vh", width: "100%" }}>
      <ReactFlow
        defaultNodes={tempNodes}
        defaultEdges={tempEdges}
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
