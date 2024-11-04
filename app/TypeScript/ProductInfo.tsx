import React from 'react'
import { Products } from './Object'

interface productInfo {
    products: Products[]
}

const ProductInfo = ({ products }: productInfo) => {
    console.log(products)

    // return <h1>Deb</h1>
    return (
            <div>
                {products?.map((prodInformation) => (
                    <div key={prodInformation.id}>
                        <h1>{prodInformation.prodName}</h1>
                    </div>
                ))}
            </div>
    )
}

export default ProductInfo
