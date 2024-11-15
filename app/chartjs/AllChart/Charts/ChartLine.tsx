"use client"
import React from 'react'
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    Tooltip,
    CategoryScale,
    AnimationSpec
} from "chart.js";
import { Line } from "react-chartjs-2";

    ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale);

//Sample of chart that you will put manually the data
const ChartLine = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: "Looping tension",
            data: [10, 5, 8, 25, 40, 6, 3],
            borderColor: "rgba(75, 192, 192, 1)", // Line color
            backgroundColor: "rgba(75, 192, 192, 0.4)", // Fill color for the area
            borderWidth: 2,
            tension: 0.4, // Controls the smoothness of the line
            fill: true
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
            display: true,
            text: "Line chart",
            },
        },
        scales: {
            y: {
            min: 0,
            max: 50,
            },
        },
        animations: {
            tension: {
                duration: 1000,
                easing: "linear" as const,
                from: 1,
                to: 0,
                loop: true,
            } as AnimationSpec<'line'>,
        },
    };

    return (
        <div className='h-3/4 w-2/5'>
            <Line data={data} options={options}/>
        </div>
    )
}

export default ChartLine
