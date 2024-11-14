import { useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'

const temporaryURL = 'wss://web-socket-backend-beryl.vercel.app/'

const Usesocket = () => {
    const [ Socket, setSocket ] = useState<Socket | null>(null)

    useEffect(()=> {
        const newSocket = io(temporaryURL, 
            { transports: ['websocket'], secure: true }
        )
        setSocket(newSocket)
        console.log(temporaryURL)
        return () => {
            newSocket.disconnect()
        }
    }, [])
    return Socket
}

export default Usesocket