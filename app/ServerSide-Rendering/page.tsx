// pages/ssr-page.js
import axios from 'axios';
import React from 'react';
import { Post } from '../types/user';
import ClientComponent  from './ClientSide';

export default async function SSRPage() {
    try {
        const response = await axios.get<Post>('https://jsonplaceholder.typicode.com/posts/1')
        const post: Post = response.data
        return <ClientComponent initialData={post}/>
    } catch (error) {
        console.error(error)
    }
}

//Axios + SSR