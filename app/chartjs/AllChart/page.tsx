"use client"
import React from 'react'
import ChartLine from './Charts/ChartLine'
import { chartdata } from '@/app/axios/axiosInstance'
import { useQuery } from '@tanstack/react-query'
import PolarChart from './Charts/PolarChart'

interface PolarChart {
    labels: string[]
    values: number[]
}

const Page = () => {

    const fetchChartData = async () => {
        const response = await chartdata.get<PolarChart>('')
        const { labels, values } = response.data
        return { labels, values }
    }

    const { data: datas, isLoading, isError } = useQuery<PolarChart | null>({
        queryKey: ['chartdata'],
        queryFn: fetchChartData
    })

    if(isLoading) return <h2>Loading...</h2>
    if(isError) return <h2>Failed to fetch</h2>

    const labels = datas?.labels.sort((a,b)=> Number(a) - Number(b))
    
    return  (
        <div className='min-h-screen p-4 grid grid-cols-1 '>
            <ChartLine/>
            <PolarChart data={{ labels: labels, values: datas?.values }}/>
        </div>
    )
}

export default Page
