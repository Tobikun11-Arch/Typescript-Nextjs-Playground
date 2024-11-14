"use client"
import React, { useEffect, useState, useRef } from 'react'
import UseSocket  from './custom/Usesocket'

const Page = () => { //Test development page
    const [ username, setUsername ] = useState('')
    const [ registered, setRegistered ] = useState(false)
    const [ message, setMessage ] = useState('')
    const [ messages, setMessages ] = useState<{ sender: string, text: string }[]>([])
    const bottomRef = useRef<HTMLDivElement | null>(null)
    const socket = UseSocket()

    useEffect(()=> {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    useEffect(()=> {
        if(socket) {
            socket.on('chat message', (msg: { sender: string, text: string })=> { 
                setMessages((prevMessages)=> [...prevMessages, msg])
            })

            socket.on('user joined', (notification: string) => {
                setMessages((prevMessages)=> [...prevMessages, { sender: 'System', text: notification }])
            })

            socket.on('user left', (notification: string) => {
                setMessages((prevMessages)=> [...prevMessages, { sender: 'System', text: notification }])
            })
        }

        return ()=> {
            if(socket) {
                socket.off('chat message')
                socket.off('user joined')
                socket.off('user left')
            }
        }
    },[socket])

    const sendMessage = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
            if(socket && message) {
            console.log("Message: ", message)
            console.log("Messages[]: ", messages)
            socket.emit('chat message', message)
            setMessage('')
            }

            console.log("no message and socket")
        }
    }

    const handleRegister = () => {
        if(username && socket) {
            socket.emit('register', username)
            setRegistered(true)
        }
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900">
            {!registered ? 
            (
                <div className='flex flex-col gap-2 '>
                    <input type="text" placeholder='Username' className='px-2 h-10 rounded-lg outline-none text-black'
                        value={username}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setUsername(e.target.value)}
                    />
                    <button onClick={handleRegister} className='py-1 px-4 bg-blue-700 text-white font-bold'>Join chat</button>
                </div>
            ) : 
            (<>
                <div className="list bg-gray-100 w-64 px-2 pb-2 h-64 overflow-y-scroll rounded shadow-md mb-3">
                <ul>
                    {messages.map((msg, index) => ( //Tricks
                        <li key={index} className={`mt-2 ${msg.sender === username ? 'ml-10 bg-blue-600 rounded-md p-2 text-black self-end text-right' : 'text-black bg-gray-500 self-start rounded-md p-2 text-left'}`}>
                            <span className='font-bold'>{msg.sender === username ? (<><span className='text-sm text-white'>{msg.text}</span></>) : (<><span className='text-sm'>{msg.sender}:</span> <span className='text-white text-sm'>{msg.text}</span></>)}</span> 
                        </li>
                    ))}
                    <div ref={bottomRef}/>
                </ul>
            </div>

            <div className='flex flex-col gap-2'>
                <input
                    type="text" placeholder='send message'
                    className='outline-none h-10 w-48 pl-3 text-black'
                    value={message}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setMessage(e.target.value)}
                    onKeyDown={sendMessage}
                />
            </div>
            </>)}
        </div>
    )
}

export default Page