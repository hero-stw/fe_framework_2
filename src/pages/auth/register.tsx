import React, { useEffect, useState } from 'react'
import {useForm, SubmitHandler} from "react-hook-form"
import { useRouter } from 'next/router'
import Link from 'next/link'
import {useAuth} from "../../hooks/auth";

type Props = {}

type typeRegister = {
    username:string,
    email:string,
    password:string
}

const Register = (props: Props) => {

const[meraki,setMeraki] = useState(false);

const router = useRouter()

const {register,handleSubmit,formState:{errors}} = useForm<typeRegister>();

const { UseSignup } = useAuth();

const onSubmit:SubmitHandler<typeRegister> = async (value:any) =>{
    console.log(value);
    if(value){
        await UseSignup(value)
        setMeraki(true)
        setTimeout(()=>{
            setMeraki(false)
            router.push('/auth/login');
        },3000)
    }
}

  return (
    <div className='w-full relative bg-[#5796de] pt-10' style={{height:'700px'}}>
        {meraki ? 
        <div className="flex right-2 absolute w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-center w-12 bg-emerald-500">
            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"/>
            </svg>
        </div>
        
        <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
                <span className="font-semibold text-emerald-500 dark:text-emerald-400">Success</span>
                <p className="text-sm text-gray-600 dark:text-gray-200">Your account has been registered, go to the login page in 3 seconds !</p>
            </div>
        </div>
        </div>
         : ""}
        <div className="flex flex-col max-w-md p-6 py-64 rounded-md sm:p-10 bg-white m-auto register">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold text-blue-500">Sign up</h1>
                <p className="text-sm text-gray-400">Sign up to access your account</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block mb-2 text-sm">Username</label>
                        <input type="text" id="username" {...register('username', 
                        {
                            required:"Name cannot be blank !", 
                            minLength: {
                                value:3,
                                message:"Name should not be less than 3 characters !"
                            },
                            maxLength:{
                                value:30,
                                message:"Name cannot be more than 30 characters !"
                            }
                            })} className="w-full px-3 py-2 border rounded-md border-gray-400 outline-none" />
                        <span className='text-red-500'>{errors.username?.message}</span>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="text" id="email" {...register('email',
                        {
                            required:"Email cannot be blank !" ,
                            pattern:{
                                value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message:"Your email is not in the correct format !"
                            }
                        })} className="w-full px-3 py-2 border rounded-md border-gray-400 outline-none" />
                        <span className='text-red-500'>{errors.email?.message}</span>
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                        </div>
                        <input type="password" id="password" {...register('password',{ 
                            required:"Name cannot be blank !", 
                            minLength: {
                                value:3,
                                message:"Password should not be less than 3 characters !"
                            },
                            })} className="w-full px-3 py-2 border rounded-md border-gray-400 outline-none" />
                        <span className='text-red-500'>{errors.password?.message}</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-[#fc0]">Sign up</button>
                    </div>
                    <p className="px-6 text-sm text-center">Do you already have an account ?
                        <span className="hover:underline text-red-500"> <Link href="/auth/login">Signin</Link></span>.
                    </p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register