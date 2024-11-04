import React from 'react'
import { HumanProps } from './Object'

interface humanProps {
    humans: HumanProps[]
}

const Props = ({ humans }: humanProps) => {
    return (
        <div>
        {humans.map((productDetails)=> (
            <div key={productDetails.id}>
                <h1>{productDetails.name}</h1>
            </div>
        ))}
        </div>
    )
}

export default Props
