import React from "react";
import { LineChart } from '@mui/x-charts/LineChart';

export default function LineGraph(props) {
    return (
        <LineChart
        
            height={300}
            grid={{ horizontal: true }}
            xAxis={[{
                data: props.dataset.x,
                label: 'time (s)',
            }]}
            yAxis={[{
                label: props.axisLabel,
                min: props.minValue,
                max: props.maxValue,
            }]}
            series={[{
                data: props.dataset.y,
                showMark: false,
                
            }]}>
        </LineChart>

    )
}
