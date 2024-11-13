import { useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'

const temporaryURL = 'http://localhost:5000'

const socket = () => {
    const [ socket, setSocket ] = useState<Socket | null>(null)

    useEffect(()=> {
        const newSocket = io(temporaryURL)
        setSocket(newSocket)
        console.log("Socket: ", socket)
        
        return () => {
            newSocket.disconnect()
        }
    }, [])
    return socket
}

export default socket
