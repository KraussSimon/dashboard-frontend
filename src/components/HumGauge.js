import React from "react";
//import { Doughnut } from "react-chartjs-2";
import {
  Gauge,
  gaugeClasses,
  useGaugeState
} from '@mui/x-charts/Gauge';

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="grey"
        strokeWidth={3}
      />
    </g>
  );
}


export default function TempGauge(props) {
  return (
    <Gauge
      height={300}
      startAngle={-110}
      endAngle={110}
      value={props.dataset}
      valueMax={100}
      valueMin={0}
      sx={{
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 50,
          fontFamily: 'sans-serif',
          transform: 'translate(0px, 50px)',
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: 'transparent',
          display: false,
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: "url('#myGradient')",
        },
      }}
      text={
        ({ value }) => `${value} %`
      }>

      <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(90)">
          <stop offset="15%" stopColor="green" />
          <stop offset="40%" stopColor="yellow" />
          <stop offset="90%" stopColor="red" />
        </linearGradient>
      </defs>
      <GaugePointer />
    </Gauge>
  );
};
