import { create } from 'zustand'
import { Post } from '../types/user'

interface userProps {
    data: Post | null
    setData: (data: Post | null) => void
}

export const useUserData = create<userProps>((set)=> ({
    data: null,
    setData: (data) => set({ data })
}))