import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <div className='bg-[#4192EC] flex justify-between items-center px-20 py-2' >
            <div>
                <Link href="/register"><a><img src="https://www.preplounge.com/assets/images/logo/header.png" width="200px" alt="" /></a></Link>
            </div>
            <div className='flex justify-center items-center'>
                <div className='text-white px-4 font-normal hover:underline'>
                    <Link href="/login">Login</Link>
                </div>
                <div>
                    <button className='h-8 bg-[#FECD00] px-11 rounded font-medium'><Link href="/register">Sign up for free</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Header