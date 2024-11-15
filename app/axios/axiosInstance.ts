import axios from "axios"

export const humanData = axios.create({
    baseURL: process.env.NEXT_PUBLIC_HUMAN_URL,
    headers: {
        "Content-Type": "application/type",
    },
})

export const backend = axios.create({
    baseURL: process.env.NEXT_PUBLIC_USER_DATA_API_URL,
    headers: {
        "Content-Type": "application/type",
    },
})

export const chartdata = axios.create({
    baseURL: 'http://localhost:5000/years/data',
    headers: {
        "Content-Type": "application/type",
    },
})