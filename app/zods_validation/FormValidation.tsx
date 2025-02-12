"use client"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from './SchemaValidation';
import Input from "./Input";

type RegisterFormInputs = z.infer<typeof registerSchema>

export default function FormValidation() {
    const { handleSubmit, register, formState: { errors } } = useForm<RegisterFormInputs>({
        resolver: zodResolver(registerSchema)
    })

    function onSubmit(data: RegisterFormInputs) {
        console.log(data)
    }

    return (
        <main className="h-screen">
            <form onSubmit={handleSubmit(onSubmit)} className='bg-black max-w-md mx-auto p-4'>
                    <Input
                        {...register("email")}
                        placeholder="Email"
                        type="email"
                    />
                    {errors.email && <p className="text-red-500 text-sm -mt-3">{errors.email.message}</p>}

                    <Input
                        {...register("username")}
                        placeholder="username"
                        type="text"
                    />
                    {errors.username && <p className="text-red-500 text-sm -mt-3">{errors.username.message}</p>}

                    <Input
                        {...register("password")}
                        placeholder="password"
                        type="password"
                    />
                    {errors.password && <p className="text-red-500 text-sm -mt-3">{errors.password.message}</p>}

                <button className="px-4 py-1 bg-blue-600 text-white font-semibold" type="submit">Submit</button>
            </form>
        </main>
    )
}