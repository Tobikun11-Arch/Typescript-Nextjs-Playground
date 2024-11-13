"use client"
import React, { useEffect, useState } from 'react'
import useSocket  from './custom/socket'

const Page = () => { //Test development page
    const [ message, setMessage ] = useState('')
    const [ messsages, setMessages ] = useState<string[]>([])
    const socket = useSocket()

    useEffect(()=> {
      if(socket) {
        socket.on('chat message', (msg: string)=> { 
          setMessages((prevMessages)=> [...prevMessages, msg])
        })
      }

      return ()=> {
        if(socket) {
          socket.off('chat message')
        }
      }
    },[socket])

    const sendMessage = () => {
      if(socket && message) {
        console.log("Message: ", message)
        console.log("Messages[]: ", messsages)
        socket.emit('chat message', message)
        setMessage('')
      }

      console.log("false")
    }

    return (
      <div className="h-screen flex justify-center items-center bg-white dark:bg-gray-900">
          <div className='list'>
          <ul>
            {messsages.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col gap-2'>
          <input
            type="text" placeholder='Messages'
            className='outline-none h-10 w-48 pl-3 text-black'
            value={message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setMessage(e.target.value)}
          />
          <button onClick={sendMessage} className='px-4 py-1 bg-black'>Send</button>
        </div>
      </div>
    )
}

export default Page