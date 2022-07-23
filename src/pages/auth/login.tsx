import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Link from "next/link";

type Props = {}

type typeRegister = {
    email:string,
    password:string
}

const Login = (props: Props) => {

  const[meraki,setMeraki] = useState(false);

  const {register,handleSubmit,formState:{errors}} = useForm<typeRegister>();

  const onSubmit:SubmitHandler<typeRegister> = async (value) =>{
    console.log(value);
    if(value){
        setMeraki(true);
        setTimeout(()=> {
            setMeraki(false);
        },1000)
    }
  }

  return (
    <div className='w-full bg-[#1F2937] pt-10' style={{height:'650px'}}>
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
                <p className="text-sm text-gray-600 dark:text-gray-200">Logged in successfully !</p>
            </div>
        </div>
        </div>
         : ""}
        <div className="flex flex-col max-w-md p-6 py-64 rounded-md sm:p-10 bg-gray-900 text-gray-100 m-auto">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                <p className="text-sm text-gray-400">Sign in to access your account</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="text" {...register('email',
                        {
                            required:"Email cannot be blank !",
                            pattern:{
                                value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message:"Your email is not in the correct format !"
                            }
                        })} 
                        id="email" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                        <span className='text-red-500'>{errors.email?.message}</span>
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                        </div>
                        <input type="password" id="password" {...register('password',
                        {
                            required:{
                                value:true,
                                message:"Password cannot be blank !"
                            }
                        })} 
                        className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                        <span className='text-red-500'>{errors.password?.message}</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Sign in</button>
                    </div>
                    <p className="px-6 text-sm text-center text-gray-400">Do not have an account ?
                    <span className="hover:underline text-violet-400"> <Link href="/auth/register">Signup</Link></span>.
                    </p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login