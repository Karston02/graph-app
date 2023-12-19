import React from "react";
import ReactFlow, {
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import { CircleNode } from "../CircleNode/CircleNode";

const nodeStyle = {
  color: "#0041d0",
  borderColor: "#0041d0",
};

export const nodes = [
  {
    type: "circle",
    id: "1",
    data: { label: "BTC" },
    position: { x: 100, y: 0 },
    style: nodeStyle,
  },
  {
    type: "circle",
    id: "2",
    data: { label: "ETH" },
    position: { x: 0, y: 100 },
    style: nodeStyle,
  },
  {
    type: "circle",
    id: "3",
    data: { label: "LTC" },
    position: { x: 200, y: 100 },
    style: nodeStyle,
  },
  {
    type: "circle",
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
const nodeTypes = {
  circle: CircleNode,
};
interface GraphProps {
  page: number;
  nodes2: any;
  edges2: any;
}

export function Graph({ page, nodes2, edges2 }: GraphProps) {
  return (
    <div className="" style={{ height: "100vh", width: "100%" }}>
      <ReactFlow
        defaultNodes={nodes}
        defaultEdges={edges}
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
