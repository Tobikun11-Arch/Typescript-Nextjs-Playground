import { useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'

const temporaryURL = process.env.NEXT_PUBLIC_GLITCH_URL

const Usesocket = () => {
    const [ Socket, setSocket ] = useState<Socket | null>(null)

    useEffect(()=> {
        const newSocket = io(temporaryURL, 
            { transports: ['websocket'], secure: true }
        )
        setSocket(newSocket)
        return () => {
            newSocket.disconnect()
        }
    }, [])
    return Socket
}

export default Usesocket