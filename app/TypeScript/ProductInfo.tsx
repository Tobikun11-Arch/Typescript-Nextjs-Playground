import React from 'react'
import { Products } from './Object'

interface productInfo {
    products: Products[] | undefined
}

const ProductInfo = ({ products }: productInfo) => {

    return (
        <div>
            {products?.map((prodInformation) => (
                <div key={prodInformation?.id}>
                    <h1>{prodInformation?.prodName}</h1>
                </div>
            ))}
        </div>
    )
}

export default ProductInfo
