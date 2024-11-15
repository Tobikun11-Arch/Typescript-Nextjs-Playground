import React, { FC, useState, useEffect } from 'react'
import { PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  ArcElement
} from 'chart.js';

ChartJS.register(CategoryScale, RadialLinearScale, LinearScale, ArcElement, BarElement, Title, Tooltip, Legend);

interface PolarChartProps {
  data: {
    labels: string[] | undefined
    values: number[] | undefined
  }
}

const PolarChart: FC<PolarChartProps> = ({ data }) => {
  const polarData = {
    labels: data.labels || [],
    datasets: [
      {
        label: "Dataset",
        data: data.values || [],
        backgroundColor:  "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "My Polar Chart" },
    },
  };

    return <PolarArea data={polarData} options={options}/>
}

export default PolarChart
