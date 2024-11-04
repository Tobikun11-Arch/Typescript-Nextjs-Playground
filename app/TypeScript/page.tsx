"use client"
import React, { useEffect, useState } from 'react'
import { Products, HumanProps } from './Object'
import { humanData, backend } from '../axios/axiosInstance'
import Props from './Props'
import ProductInfo from './ProductInfo'

const Page = () => {
    const [ data, setData ] = useState<HumanProps[]>([])
    const [ product, setProduct ] = useState<Products[]>([])

    useEffect(()=> {
        const fetchData = async() => {
            try {
                const response = await humanData.get('');
                setData(response.data)
                
            } catch (error) {
                console.error("fetch error", error)
            }
        }
        fetchData()
    }, [])
    //for printing array from human data

    useEffect(()=> {
        const fetchData = async() => {
            try {
                const response = await backend.get('');
                setProduct(response.data.users)
                
            } catch (error) {
                console.error("fetch error", error)
            }
        }
        fetchData()
    }, [])
     //for printing array from my backend

  return (
    <>
       <div className="flex gap-2">
        <Props humans={data}/> 
        <ProductInfo products={product}/>
       </div>
    </>
  )
}   

export default Page