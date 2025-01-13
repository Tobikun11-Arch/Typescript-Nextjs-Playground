'use client'
import React, { useEffect, useState } from 'react'
import DataTableDemo from './data-table'
import { Data } from './data-types'
import { useProductDetails, usefilter } from '@/app/stores/product'

export default function Page() {
    const [data, setData] = useState<Data | null>(null);
    const { setTableData, tableData } = useProductDetails()
    const { isStatus } = usefilter()

    function StatusFunction(statusdata: Data, statusType: string) {
        const status = statusdata.user_data.filter((status)=> status.status === statusType)
        const simplifiedData = status.map((product)=> ({
            _id: product._id,
            productName: product.productName,
            productPrice: product.productPrice,
            status: product.status,
            images: product.images[0]
        }))
        setTableData(simplifiedData)
    }

    useEffect(()=> {
        const fetchdata = async() => {
            try {
                const response = await fetch('http://localhost:5000/api/users/Demo', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if(!response.ok) {
                    console.log(`Response error ${response.status}`)
                }

                const result: Data = await response.json()
                console.log("Data: ", result)
                setData(result)
                if(isStatus === "draft") {
                    StatusFunction(result, "draft")
                    return
                }
                else if(isStatus === "Published") {
                    StatusFunction(result, "Published")
                    return
                } 
                const simplifiedData = result.user_data.map((product)=> ({
                    _id: product._id,
                    productName: product.productName,
                    productPrice: product.productPrice,
                    status: product.status,
                    images: product.images[0]
                }))
                setTableData(simplifiedData)
            } catch (error) {
                console.error(error)
            }
            
        }
        fetchdata()
    }, [isStatus])  

    useEffect(()=> {
        console.log("Data table: ", tableData)
    }, [tableData])

    return (
        <div className='px-20 cursor-default'>
            <DataTableDemo/>
        </div>
    )
}
