"use client"
import React from 'react'
import BarChart from './components/BarChart'
import { useQuery } from '@tanstack/react-query'
import { chartdata } from '../axios/axiosInstance'

interface BarChartProps {
    labels: string[]
    values: number[]
}

const Page = () => {

    const fetchData = async() => {
        const response = await chartdata.get('')
        const { labels, values } = response.data 
        return { labels, values }
    }

    const { data, isLoading, isError } = useQuery<BarChartProps | null>({
        queryKey: ['data'],
        queryFn: fetchData
    })

    if(isLoading) return <h2>Loading...</h2>
    if(isError) return <h2>Failed to fetch</h2>

    const values = data?.values.sort((a,b)=> Number(a) - Number(b))

    return <BarChart data={{ labels: data?.labels, values: values }}/> //barchart
}

export default Page
