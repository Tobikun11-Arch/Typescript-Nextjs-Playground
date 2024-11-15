"use client"
import React, { useEffect } from 'react'
import { HumanProps, Products } from './Object'
import { humanData, backend } from '../axios/axiosInstance'
import Props from './Props'
import ProductInfo from './ProductInfo'
import { useQuery } from '@tanstack/react-query'
import { lineSpinner } from 'ldrs'

const Page = () => {
    const fetchdataProduct = async () => {
        const response = await backend.get('')
        return response.data.products
    }

    const fetchdataHuman = async () => {
        const response = await humanData.get('')
        return response.data
    }

    const { data: products, isError: productsError, isLoading: productsLoading } = useQuery<Products[] | []>({
        queryKey: ['products'],
        queryFn: fetchdataProduct
    })

    const { data: humans, isError: humansError, isLoading: humansLoading } = useQuery<HumanProps[] | []>({
        queryKey: ['humansdata'],
        queryFn: fetchdataHuman
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            lineSpinner.register()
        }
    }, [])

    if(productsLoading || humansLoading) {
        return (
            <div className="flex items-center justify-center h-screen bg-[#171717] dark:bg-[#171717]">
                <l-line-spinner
                size="50"
                bg-opacity="0.1"
                speed="1.75" 
                color="white" 
                ></l-line-spinner>
            </div>
        )
    }

    if(productsError || humansError) {
        return (
            <div className="flex items-center justify-center h-screen bg-[#171717] dark:bg-[#171717]">
                <h1 className='text-red-700 font-bold'>Fetch Error</h1>
            </div>
        )
    }

    return (
        <>
        <div className="flex gap-2">
            <Props humans={humans}/> 
            <ProductInfo products={products}/>
        </div>
        </>
    )
}   

export default Page