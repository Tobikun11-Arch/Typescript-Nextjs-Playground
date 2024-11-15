"use client"
import React from 'react'
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"

const Page = () => {
    const { toast } = useToast()
    const date = "November 15, 2024"
    return (
       <div className="h-screen flex justify-center items-center">
            <Button
                onClick={() => {
                    toast({
                    title: "Schedule updated",
                    description: date,
                    action: (
                            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                        ),
                    })
                }}
                > Add to schedule
            </Button>
       </div>
    )
}

export default Page
