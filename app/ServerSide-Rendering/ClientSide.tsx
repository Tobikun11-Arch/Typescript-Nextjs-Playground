"use client"
import React, { useEffect } from 'react'
import { Post } from '../types/user'

interface clientProps {
    initialData: Post
}

const page = ({ initialData }: clientProps) => {
    useEffect(()=> {
        console.log("initialData: ", initialData)
    }, [])

    return (
        <div>
            <h1>Home</h1>
            <h1>Title: <br /> {initialData.title}</h1>
        </div>
    )
}

export default page
