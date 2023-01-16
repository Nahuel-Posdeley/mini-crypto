import React from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'

const LineGraph = ({label, labels,values,showTicks}) => {
  return (
    <Line
    options={{
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: showTicks
                }
            }
        }
    }}
     data={{
        labels: labels,
        datasets: [
            {
                data: values,
                label: label,
                backgroundColor: '#a2dfa2',
                borderColor: 'green',
                borderWidth: 2,
                radius: 0.5,
                fill: true,
            }
        ]
     }}
    />
  )
}

export default LineGraph
