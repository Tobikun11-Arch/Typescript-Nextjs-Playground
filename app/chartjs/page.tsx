"use client"
import React, { useEffect, useState, FC } from 'react'
import BarChart from './components/BarChart'
import axios from 'axios'

interface BarChartProps {
    labels: string[]
    values: number[]
}
const temporaryUrl = 'http://localhost:5000/years/data'

const page: FC = () => {
    const [ chartData, setChartData ] = useState<BarChartProps | null>(null)

    useEffect(()=> {    
        const fetchdata = async () => {
            try {
                const response = await axios.get<BarChartProps>(temporaryUrl)
                setChartData({
                    labels: response.data.labels,
                    values: response.data.values,
                });
            } catch (error) {
                console.error(error)
            }
        }   
        fetchdata()
    },[])

    const values = chartData?.values.sort((a,b)=> Number(a) - Number(b))

    return <BarChart data={{ labels: chartData?.labels, values: values }}/> //barchart
}

export default page
