import { useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'

const temporaryURL = 'http://localhost:5000'

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