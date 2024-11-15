import { FC, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
    data: {
        labels: string[] | undefined
        values: number[] | undefined
    }
}

const BarChart: FC<BarChartProps> = ({ data }) => {
    const [chartData, setChartData] = useState({
        labels: data.labels,
        datasets: [
            {
                label: 'Dataset',
                data: data.values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    });

    useEffect(()=> {
        setChartData({
            labels: data.labels,
            datasets: [
            {
                label: 'Dataset',
                data: data.values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            ],
        });
    }, [data])

    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' as const },
            title: { display: true, text: 'My Bar Chart' },
        },
    };

    return <Bar data={chartData} options={options}/>
}

export default BarChart