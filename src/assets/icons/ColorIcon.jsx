import * as React from "react";
import { Context } from "../../contexts";
const ColorIcon = (props) => {
  const { currentColor } = React.useContext(Context);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 2"
      viewBox="0 0 41.54 39.4"
      {...props}
      style={{
        height: "100%",
      }}
    >
      <g data-name="Layer 1">
        <circle
          cx={12.69}
          cy={26.72}
          r={12.12}
          style={{
            fill: currentColor.prim,
            stroke: currentColor.sec,
            strokeMiterlimit: 10,
            strokeWidth: "1.12px",
            opacity: 0.3,
          }}
        />
        <circle
          cx={28.85}
          cy={26.72}
          r={12.12}
          style={{
            stroke: currentColor.sec,
            strokeMiterlimit: 10,
            strokeWidth: "1.12px",
            fill: currentColor.prim,
            opacity: 0.55,
          }}
        />
        <circle
          cx={20.77}
          cy={12.69}
          r={12.12}
          style={{
            fill: currentColor.prim,
            opacity: 0.9,
            stroke: currentColor.sec,
            strokeMiterlimit: 10,
            strokeWidth: "1.12px",
          }}
        />
      </g>
    </svg>
  );
};
export default ColorIcon;
