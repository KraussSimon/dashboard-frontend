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
      title="Room Temperature"
      startAngle={-110}
      endAngle={110}
      value={props.dataset}
      valueMax={50}
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
          fill: "url('#myTempGradient')",
        },
      }}
      text={
        ({ value }) => `${value} °C`
      }>

      <defs>
        <linearGradient id="myTempGradient" gradientTransform="rotate(0)">
          <stop offset="7%" stopColor="#0038ff" />
          <stop offset="30%" stopColor="#5ba083" />
          <stop offset="50%" stopColor="#d0aa48" />
          <stop offset="60%" stopColor="#e88d14" />
          <stop offset="97%" stopColor="#ff0000" />
        </linearGradient>
      </defs>
      <GaugePointer />
    </Gauge>
  );
};
