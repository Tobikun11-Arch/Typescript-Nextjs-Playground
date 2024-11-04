import axios from "axios"

export const humanData = axios.create({
    baseURL: process.env.NEXT_PUBLIC_HUMAN_URL
})

export const backend = axios.create({
    baseURL: process.env.NEXT_PUBLIC_USER_DATA_API_URL
})