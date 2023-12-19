import { Handle, Position } from "reactflow";
import "./circleNodeStyles.css";

interface CircleNodeProps {
  data: any;
  isConnectable: boolean;
}
export function CircleNode({ data, isConnectable }: CircleNodeProps) {
  return (
    <div
      style={{
        width: "2em",
        height: "2em",
        borderRadius: "50%",
        background: "linear-gradient(45deg, #e069a5, #b85bdd)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div className="node-label">{data.label}</div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        isConnectable={isConnectable}
      />
    </div>
  );
}
