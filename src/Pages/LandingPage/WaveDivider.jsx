// components/WaveDivider.tsx
import React from "react";

const WaveDivider = ({ fill = "#fff", flip = false }) => {
  return (
    <div style={{ margin: 0, padding: 0, lineHeight: 0, marginTop: "-5px" }}>
      <svg
        viewBox="0 0 1440 100"
        style={{
          display: "block",
          transform: flip ? "rotate(180deg)" : "none",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={fill}
          d="M0,64 C360,0 1080,128 1440,64 L1440,0 L0,0 Z"
        
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
