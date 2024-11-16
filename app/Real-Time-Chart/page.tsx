"use client"
import React, { useState, useRef, useEffect } from 'react'
import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        BarElement,
        Title,
        Tooltip,
        Legend,
    } from 'chart.js';
import { realtimeData } from '../axios/axiosInstance';
import { Bar } from 'react-chartjs-2';
import { useQuery } from '@tanstack/react-query';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const Page = () => {
    const fetchRealData = async () => {
        const response = await realtimeData.get('')
        const { timestamp, value } = response.data
        return { timestamp, value } 
    }

    const chartRef = useRef<any>()

    const [ chartData, setChartdata ] = useState({
        labels: [] as string[],
        datasets: [
            {
                label: 'Live data',
                data: [] as number[],
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderWidth: 2,
            }
        ]
    })

    const { data: datas, isLoading, isError } = useQuery({
        queryKey: ['data'],
        queryFn: fetchRealData,
        refetchInterval: 3000,
        enabled: true
    })

    useEffect(()=> {
        if(datas) {
            const updatedLabels = [...chartData.labels, new Date().toLocaleTimeString()]
            const updateData = [...chartData.datasets[0].data, datas.value]

            if(updatedLabels.length > 10) {
                updatedLabels.shift()
                updateData.shift()
            }   

            setChartdata({
                labels: updatedLabels,
                datasets: [
                    {
                        ...chartData.datasets[0],
                        data: updateData
                    }
                ]
            })

            if(chartRef.current) {
                chartRef.current.update()
            }
        }
    }, [datas])

    const options = {
        responsive: true, //Can add other options here
    }

    if(isLoading) return <h2>Loading...</h2>
    if(isError) return <h1>Failed to fetch</h1>

    return <Bar options={options} ref={chartRef} data={chartData}/>
}

export default Page
