import { useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'

const temporaryURL = 'https://web-socket-backend-beryl.vercel.app/' //add this to env later

const Usesocket = () => {
    const [ Socket, setSocket ] = useState<Socket | null>(null)

    useEffect(()=> {
        const newSocket = io(temporaryURL, { transports: ['websocket'] })
        setSocket(newSocket)
        
        return () => {
            newSocket.disconnect()
        }
    }, [])
    return Socket
}

export default Usesocket